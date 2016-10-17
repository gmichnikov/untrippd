import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, Link, withRouter } from 'react-router';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirm_password: "",
      first_name: "",
      last_name: "",
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processSignupForm({user: user});
    this.setState(Object.assign(
      {}, this.state, {password: "", confirm_password: ""}
    ));
  }

  componentDidMount() {
    setTimeout(() => ReactDOM.findDOMNode(this.refs.username).focus(), 0);
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.loggedIn) {
      this.props.changeWelcomeNotification("Welcome to Untrippd! Thanks for signing up.");
      nextProps.router.push("/home");
    }
  }


  update(property) {
    if (property === 'username') {
      return e => this.setState({username: e.target.value});
    } else if (property === 'password') {
      return e => this.setState({password: e.target.value});
    } else if (property === 'confirmPassword') {
      return e => this.setState({confirm_password: e.target.value});
    } else if (property === 'firstName') {
      return e => this.setState({first_name: e.target.value});
    } else if (property === 'lastName') {
      return e => this.setState({last_name: e.target.value});
    } else if (property === 'email') {
      return e => this.setState({email: e.target.value});
    } else {
    }
  }

  render () {

    let linkToOtherPage = <Link to="/login">Log In</Link>;

    let errorList = this.props.signupErrors.map( (error, i) => {
      return <li key={i}>{error}</li>;
    });

    return (
      <section className="section-for-signup-form">
        <div className="signup-image"></div>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <h1>Untrippd</h1>
          <h3>Travel Socially</h3>
          <h5>All fields below are required unless specified.</h5>
          <ul className="signup-errors">{errorList}</ul>
          <input className="left"
            type="text"
            value={this.state.username}
            placeholder="Username"
            ref="username"
            onChange={this.update('username')}
          />
          <input
            type="text"
            value={this.state.email}
            placeholder="Email"
            onChange={this.update('email')}
          />
          <input className="left"
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.update('password')}
          />
          <input
            type="password"
            value={this.state.confirm_password}
            placeholder="Confirm Password"
            onChange={this.update('confirmPassword')}
          />
          <input className="left"
            type="text"
            value={this.state.first_name}
            placeholder="First Name"
            onChange={this.update('firstName')}
          />
          <input
            type="text"
            value={this.state.last_name}
            placeholder="Last Name"
            onChange={this.update('lastName')}
          />
        <button className="signup-button">Create Account</button>
          <p>Already have an account? <Link className="login-link" to="/login">Log in!</Link></p>
        </form>
      </section>
    );
  }


}

export default withRouter(SignupForm);
