const LoggerMiddleware = ({ getState, dispatch }) => next => action => {
  console.log("Before state: ", getState());
  let newState = next(action);
  console.log("Action: ", action);
  console.log("After state: ", getState());
  return newState;
}

export default LoggerMiddleware;
