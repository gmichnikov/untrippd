import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';

// testing session API
// import * as SESSION_API from './util/session_api_util';
// window.successCB = (data) => console.log("success", data);
// window.errorCB = (data) => console.log("error", data);
// window.signup = SESSION_API.signup;
// window.login = SESSION_API.login;
// window.logout = SESSION_API.logout;

// testing session actions and reducer
import * as SESSION_ACTIONS from './actions/session_actions';
window.login = SESSION_ACTIONS.login;
window.logout = SESSION_ACTIONS.logout;
window.signup = SESSION_ACTIONS.signup;
window.receiveCurrentUser = SESSION_ACTIONS.receiveCurrentUser;
window.receiveErrors = SESSION_ACTIONS.receiveErrors;


document.addEventListener('DOMContentLoaded', () => {

    window.store = configureStore();

    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to Untrippd</h1>, root);
});
