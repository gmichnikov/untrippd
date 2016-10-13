export const CREATE_SUGGESTION = 'CREATE_SUGGESTION';
export const REQUEST_SINGLE_SUGGESTION = 'REQUEST_SINGLE_SUGGESTION';
export const RECEIVE_SINGLE_SUGGESTION = 'RECEIVE_SINGLE_SUGGESTION';
export const RECEIVE_NEW_SUGGESTION = 'RECEIVE_NEW_SUGGESTION';
export const RECEIVE_SUGGESTION_ERRORS = 'RECEIVE_SUGGESTION_ERRORS';
export const REQUEST_ALL_SUGGESTIONS = 'REQUEST_ALL_SUGGESTIONS';
export const RECEIVE_ALL_SUGGESTIONS = 'RECEIVE_ALL_SUGGESTIONS';
export const DELETE_SINGLE_SUGGESTION = 'DELETE_SINGLE_SUGGESTION';
export const REMOVE_SINGLE_SUGGESTION = 'REMOVE_SINGLE_SUGGESTION';
export const UNLIKE_SUGGESTION = 'UNLIKE_SUGGESTION';
export const LIKE_SUGGESTION = 'LIKE_SUGGESTION';
export const INCREMENT_CURRENT_USER_SUGGESTION_LIKES = 'INCREMENT_CURRENT_USER_SUGGESTION_LIKES';
export const DECREMENT_CURRENT_USER_SUGGESTION_LIKES = 'DECREMENT_CURRENT_USER_SUGGESTION_LIKES';

export const createSuggestion = (suggestion) => {
  return {
    type: CREATE_SUGGESTION,
    suggestion: suggestion,
  };
};

export const receiveNewSuggestion = (suggestion) => {
  return {
    type: RECEIVE_NEW_SUGGESTION,
    suggestion: suggestion,
  };
};

export const receiveSuggestionErrors = (suggestionErrors) => {
  return {
    type: RECEIVE_SUGGESTION_ERRORS,
    suggestionErrors: suggestionErrors,
  };
};

export const receiveSingleSuggestion = (suggestion) => ({
	type: RECEIVE_SINGLE_SUGGESTION,
	suggestion
});

export const requestSingleSuggestion = (id) => ({
	type: REQUEST_SINGLE_SUGGESTION,
	id
});

export const requestAllSuggestions = () => ({
  type: REQUEST_ALL_SUGGESTIONS,
});

export const receiveAllSuggestions = (suggestions) => ({
	type: RECEIVE_ALL_SUGGESTIONS,
  suggestions
});

export const deleteSingleSuggestion = (id) => ({
	type: DELETE_SINGLE_SUGGESTION,
	id
});

export const removeSingleSuggestion = (suggestion) => ({
	type: REMOVE_SINGLE_SUGGESTION,
	suggestion
});


export const likeSuggestion = (id) => ({
	type: LIKE_SUGGESTION,
	id
});

export const unlikeSuggestion = (id) => ({
	type: UNLIKE_SUGGESTION,
	id
});

export const incrementCurrentUserSuggestionLikes = (id) => ({
	type: INCREMENT_CURRENT_USER_SUGGESTION_LIKES,
  id
});

export const decrementCurrentUserSuggestionLikes = (id) => ({
	type: DECREMENT_CURRENT_USER_SUGGESTION_LIKES,
  id
});
