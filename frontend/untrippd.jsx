import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

// testing session API
// import * as SESSION_API from './util/session_api_util';
// window.successCB = (data) => console.log("success", data);
// window.errorCB = (data) => console.log("error", data);
// window.signup = SESSION_API.signup;
// window.login = SESSION_API.login;
// window.logout = SESSION_API.logout;

// testing session actions and reducer
import * as SESSION_ACTIONS from './actions/session_actions';
// window.receiveCurrentUser = SESSION_ACTIONS.receiveCurrentUser;
// window.removeCurrentUser = SESSION_ACTIONS.removeCurrentUser;
// window.receiveErrors = SESSION_ACTIONS.receiveErrors;

// testing session middleware
window.signup = SESSION_ACTIONS.signup;
window.login = SESSION_ACTIONS.login;
window.logout = SESSION_ACTIONS.logout;


document.addEventListener('DOMContentLoaded', () => {

    // window.store = configureStore();
    let store = configureStore();

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});
