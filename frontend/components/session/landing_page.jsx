import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link, withRouter } from 'react-router';

class LandingPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {

    return (
      <section className="section-for-landing-page">
        <div className="landing-main">
          <div className="signup-image"></div>
          <h1>Untrippd</h1>
          <h3>Travel Socially</h3>

          <h2>DISCOVER & SHARE</h2>
          <h2>TRAVEL RECOMMENDATIONS</h2>

          <div className="landing-buttons">
            <a className="landing-button" href="/#/signup">Sign Up</a>
            <a className="landing-button" href="/#/login">Log In</a>
            <a className="landing-button" href="/#/login">Demo Log In</a>
          </div>
        </div>
      </section>
    );
  }


}

export default withRouter(LandingPage);
