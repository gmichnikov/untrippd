import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app.jsx';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const Root = ({ store }) => {

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <Route path="signup" component={SignupFormContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
