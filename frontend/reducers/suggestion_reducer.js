import * as ACTIONS from '../actions/suggestion_actions.js';
import * as PLACE_ACTIONS from '../actions/place_actions.js';

const default_suggestion_state = {
  singleSuggestion: null,
  manySuggestions: [],
  suggestionErrors: [],
};

const SuggestionReducer = (oldState = default_suggestion_state, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_NEW_SUGGESTION:
      return Object.assign({}, oldState, { manySuggestions: [action.suggestion, ...oldState.manySuggestions] });
    case ACTIONS.RECEIVE_SUGGESTION_ERRORS:
      return Object.assign({}, oldState, { singleSuggestion: null, suggestionErrors: action.suggestionErrors});
    case ACTIONS.RECEIVE_SINGLE_SUGGESTION:
      return Object.assign({}, oldState, { singleSuggestion: action.suggestion });
    case PLACE_ACTIONS.RECEIVE_SINGLE_CITY:
      return Object.assign({}, oldState, { manySuggestions: action.suggestions });
    case ACTIONS.RECEIVE_ALL_SUGGESTIONS:
      return Object.assign({}, { manySuggestions: action.suggestions });
    default:
      return oldState;
  }
};

export default SuggestionReducer;
