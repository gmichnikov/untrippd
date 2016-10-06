import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import SuggestionReducer from './suggestion_reducer';
import PlaceReducer from './place_reducer';

const RootReducer = combineReducers ({
  session: SessionReducer,
  suggestion: SuggestionReducer,
  places: PlaceReducer,
});

export default RootReducer;
