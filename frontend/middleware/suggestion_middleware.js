import * as ACTIONS from '../actions/suggestion_actions.js';
import * as API from '../util/suggestion_api_util';

export default ({ getState, dispatch }) => next => action => {

  const successCallback = suggestion => dispatch(ACTIONS.receiveSuggestion(suggestion));
  const errorCallback = xhr => dispatch(ACTIONS.receiveSuggestionErrors(xhr.responseJSON));

  switch(action.type) {
    case ACTIONS.CREATE_SUGGESTION:
      API.createSuggestion(action.suggestion, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
