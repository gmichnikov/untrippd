import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link, withRouter } from 'react-router';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    console.log("submit attempt", user);
    this.props.processSignupForm(user);
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
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
    } else if (property === 'firstName') {
      return e => this.setState({firstName: e.target.value});
    } else if (property === 'lastName') {
      return e => this.setState({lastName: e.target.value});
    } else if (property === 'email') {
      return e => this.setState({email: e.target.value});
    } else {
    }
  }

  render () {

    let header = "Sign Up!";
    let linkToOtherPage = <Link to="/login">Log In</Link>;

    let errorList = this.props.errors.map( (error, i) => {
      return <li key={i}>{error}</li>;
    });

    return (
      <section className="section-for-signup-form">
        <h1>{header}</h1>
        <ul>{errorList}</ul>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          Username:<br/>
          <input
            type="text"
            value={this.state.username}
            placeholder="Username"
            onChange={this.update('username')}
          />
          <br/>
          <br/>Password:<br/>
          <input
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.update('password')}
          />
          First Name:<br/>
          <input
            type="text"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.update('firstName')}
          />
          <br/>
          Last Name:<br/>
          <input
            type="text"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.update('lastName')}
          />
          <br/>
          Email:<br/>
          <input
            type="text"
            value={this.state.email}
            placeholder="Email"
            onChange={this.update('email')}
          />
          <br/>
        <button>{header}</button>
        </form>
        <br />
        {linkToOtherPage}
      </section>
    );
  }


}

export default withRouter(SignupForm);
