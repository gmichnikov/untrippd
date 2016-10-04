import React from 'react';
import ReactDOM from 'react-dom';

// testing session API
import * as SESSION_API from './util/session_api_util';
window.successCB = (data) => console.log("success", data);
window.errorCB = (data) => console.log("error", data);
window.signup = SESSION_API.signup;
window.login = SESSION_API.login;
window.logout = SESSION_API.logout;

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to Untrippd</h1>, root);
});
