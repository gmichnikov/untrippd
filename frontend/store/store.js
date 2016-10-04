import { createStore } from 'redux';

import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  return createStore(
    RootReducer,
    preloadedState,
  );
};

export default configureStore;
