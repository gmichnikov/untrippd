import React from 'react';
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
    console.log("login attempt", user);
    this.props.processLoginForm({user: user});
    this.state = {
      username: "",
      password: "",
    };
  }

  guestLogin(e) {
    console.log("guest login attempt");
    this.props.processLoginForm({user: {username: "guest", password: "guestpassword"}});
    this.state = {
      username: "",
      password: "",
    };
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.loggedIn) {
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
            onChange={this.update('username')}
          />
          <input
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.update('password')}
          />
        <button>Log In</button>
        <div className="guest-login" onClick={this.guestLogin}>Demo Log In</div>
        <p>New around here? <a href="/#/signup">Sign up!</a></p>
        </form>
      </section>
    );
  }


}

export default withRouter(LoginForm);
