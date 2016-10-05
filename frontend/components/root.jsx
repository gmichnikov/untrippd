import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app.jsx';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import LandingPageContainer from './session/landing_page_container';

const Root = ({ store }) => {

  const redirectIfLoggedIn = (nextState, replace) => {
    if(store.getState().session.currentUser !== null) {
      replace({
        pathname: '/home'
      });
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/signup" component={SignupFormContainer} onEnter={redirectIfLoggedIn} />
        <Route path="/login" component={LoginFormContainer} onEnter={redirectIfLoggedIn} />
        <Route path="/home" component={App} />
        <Route path="/" component={LandingPageContainer} onEnter={redirectIfLoggedIn} />
      </Router>
    </Provider>
  );
};

export default Root;
