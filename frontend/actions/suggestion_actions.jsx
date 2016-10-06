export const CREATE_SUGGESTION = 'CREATE_SUGGESTION';
export const RECEIVE_SUGGESTION = 'RECEIVE_SUGGESTION';
export const RECEIVE_SUGGESTION_ERRORS = 'RECEIVE_SUGGESTION_ERRORS';

export const createSuggestion = (suggestion) => {
  return {
    type: CREATE_SUGGESTION,
    suggestion: suggestion,
  };
};

export const receiveSuggestion = (suggestion) => {
  return {
    type: RECEIVE_SUGGESTION,
    suggestion: suggestion,
  };
};

export const receiveSuggestionErrors = (suggestionErrors) => {
  return {
    type: RECEIVE_SUGGESTION_ERRORS,
    suggestionErrors: suggestionErrors,
  };
};
