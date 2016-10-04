export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

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

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors,
  };
};

export const removeCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER,
  };
};
