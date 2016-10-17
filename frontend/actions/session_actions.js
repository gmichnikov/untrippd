export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS';
export const RECEIVE_LOGIN_ERRORS = 'RECEIVE_LOGIN_ERRORS';
export const CHANGE_WELCOME_NOTIFICATION = 'CHANGE_WELCOME_NOTIFICATION';

export const INCREASE_CURRENT_USER_FOLLOWS = 'INCREASE_CURRENT_USER_FOLLOWS';
export const DECREASE_CURRENT_USER_FOLLOWS = 'DECREASE_CURRENT_USER_FOLLOWS';

export const signup = (user) => {
  return {
    type: SIGNUP,
    user: user,
  };
};

export const login = (user) => {
  return {
    type: LOGIN,
    user: user,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: currentUser,
  };
};

export const receiveSignupErrors = (signupErrors) => {
  return {
    type: RECEIVE_SIGNUP_ERRORS,
    signupErrors: signupErrors,
  };
};

export const receiveLoginErrors = (loginErrors) => {
  return {
    type: RECEIVE_LOGIN_ERRORS,
    loginErrors: loginErrors,
  };
};

export const removeCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER,
  };
};

export const changeWelcomeNotification = (status) => {
  return {
    type: CHANGE_WELCOME_NOTIFICATION,
    status
  };
};


export const increaseCurrentUserFollows = (id) => ({
	type: INCREASE_CURRENT_USER_FOLLOWS,
  id
});

export const decreaseCurrentUserFollows = (id) => ({
	type: DECREASE_CURRENT_USER_FOLLOWS,
  id
});
