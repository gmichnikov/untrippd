import * as ACTIONS from '../actions/suggestion_actions.js';
import * as PLACE_ACTIONS from '../actions/place_actions.js';
import * as USER_ACTIONS from '../actions/user_actions.js';

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
    case USER_ACTIONS.RECEIVE_SINGLE_USER:
      return Object.assign({}, oldState, { manySuggestions: action.suggestions });
    case ACTIONS.RECEIVE_ALL_SUGGESTIONS:
      return Object.assign({}, { manySuggestions: action.suggestions });
    case ACTIONS.REMOVE_SINGLE_SUGGESTION:
      let oldSuggestions = oldState.manySuggestions;
      let existingSuggestionsIds = oldSuggestions.map((sugg) => {
        return sugg.id;
      });
      const suggIndex = existingSuggestionsIds.indexOf(action.suggestion.id);
      if (suggIndex === -1) {
        return oldState;
      } else {
        oldSuggestions = oldSuggestions.filter((sugg) => {
          return sugg.id !== action.suggestion.id;
        });
        return Object.assign({}, oldState, { manySuggestions: oldSuggestions });
      }
    case ACTIONS.INCREMENT_CURRENT_USER_SUGGESTION_LIKES:
      let newSuggestionsInc = oldState.manySuggestions.map((sugg) => {
        if (sugg.id === action.id) {
          sugg.num_likers += 1;
          return sugg;
        } else {
          return sugg;
        }
      });
      return Object.assign({}, oldState, { manySuggestions: newSuggestionsInc });
    case ACTIONS.DECREMENT_CURRENT_USER_SUGGESTION_LIKES:
      let newSuggestionsDec = oldState.manySuggestions.map((sugg) => {
        if (sugg.id === action.id) {
          sugg.num_likers -= 1;
          return sugg;
        } else {
          return sugg;
        }
      });
      return Object.assign({}, oldState, { manySuggestions: newSuggestionsDec });
    default:
      return oldState;
  }
};

export default SuggestionReducer;
