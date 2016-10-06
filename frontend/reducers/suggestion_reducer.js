import * as ACTIONS from '../actions/suggestion_actions.js';

const default_suggestion_state = {
  singleSuggestion: null,
  manySuggestions: [],
  suggestionErrors: [],
};

const SuggestionReducer = (oldState = default_suggestion_state, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_SUGGESTION:
      return Object.assign({}, oldState, { singleSuggestion: action.suggestion, suggestionErrors: [] });
    case ACTIONS.RECEIVE_SUGGESTION_ERRORS:
      return Object.assign({}, oldState, { singleSuggestion: null, suggestionErrors: action.suggestionErrors});
    default:
      return oldState;
  }
};

export default SuggestionReducer;
