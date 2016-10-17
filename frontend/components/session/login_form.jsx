import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, Link, withRouter } from 'react-router';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processLoginForm({user: user});
    this.state = {
      username: "",
      password: "",
    };
  }

  guestLogin(e) {
    this.props.processLoginForm({user: {username: "guest", password: "guestpassword"}});
    this.state = {
      username: "",
      password: "",
    };
  }

  componentDidMount() {
    setTimeout(() => ReactDOM.findDOMNode(this.refs.username).focus(), 0);
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.loggedIn) {
      this.props.changeWelcomeNotification("Welcome back!");
      nextProps.router.push("/home");
    }
  }


  update(property) {
    if (property === 'username') {
      return e => this.setState({username: e.target.value});
    } else if (property === 'password') {
      return e => this.setState({password: e.target.value});
    } else {
    }
  }

  render () {

    let linkToOtherPage = <Link to="/login">Log In</Link>;

    let errorList = this.props.loginErrors.map( (error, i) => {
      return <li key={i}>{error}</li>;
    });

    return (
      <section className="section-for-login-form">
        <div className="signup-image"></div>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h1>Untrippd</h1>
          <h3>Travel Socially</h3>
          <ul className="login-errors">{errorList}</ul>
          <input className="left"
            type="text"
            value={this.state.username}
            placeholder="Username"
            ref="username"
            onChange={this.update('username')}
          />
          <input
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.update('password')}
          />
        <button className="login-button">Log In</button>
        <div className="guest-login login-button" onClick={this.guestLogin}>Demo Log In</div>
        <p>New around here? <Link className="sign-up-link" to="/signup">Sign up!</Link></p>
        </form>
      </section>
    );
  }


}

export default withRouter(LoginForm);
