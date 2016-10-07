import * as ACTIONS from '../actions/suggestion_actions.js';
import * as API from '../util/suggestion_api_util';

export default ({ getState, dispatch }) => next => action => {

  const successCallback = suggestion => dispatch(ACTIONS.receiveNewSuggestion(suggestion));
  const errorCallback = xhr => dispatch(ACTIONS.receiveSuggestionErrors(xhr.responseJSON));
  const receiveSingleSuggestionSuccess = suggestion => dispatch(ACTIONS.receiveSingleSuggestion(suggestion));
  const receiveAllSuggestionsSuccess = suggestions => dispatch(ACTIONS.receiveAllSuggestions(suggestions));

  switch(action.type) {
    case ACTIONS.CREATE_SUGGESTION:
      API.createSuggestion(action.suggestion, successCallback, errorCallback);
      return next(action);
    case ACTIONS.REQUEST_SINGLE_SUGGESTION:
      API.fetchSingleSuggestion(action.id, receiveSingleSuggestionSuccess);
      return next(action);
    case ACTIONS.REQUEST_ALL_SUGGESTIONS:
      API.fetchAllSuggestions(receiveAllSuggestionsSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
