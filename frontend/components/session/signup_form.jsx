import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link, withRouter } from 'react-router';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    console.log("submit attempt", user);
    this.props.processSignupForm({user: user});
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: "",
    };
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.loggedIn) {
      nextProps.router.push("/");
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

    let errorList = this.props.errors.map( (error, i) => {
      return <li key={i}>{error}</li>;
    });

    return (
      <section className="section-for-signup-form">
        <div className="signup-image"></div>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <h1>Untrippd</h1>
          <h3>Travel Socially</h3>
          <p>All fields below are required unless specified.</p>
          <ul className="signup-errors">{errorList}</ul>
          <input className="left"
            type="text"
            value={this.state.username}
            placeholder="Username"
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
        <button>Create Account</button>
        </form>
      </section>
    );
  }


}

export default withRouter(SignupForm);
