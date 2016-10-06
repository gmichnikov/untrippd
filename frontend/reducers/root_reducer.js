import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import SuggestionReducer from './suggestion_reducer';

const RootReducer = combineReducers ({
  session: SessionReducer,
  suggestion: SuggestionReducer,
});

export default RootReducer;
