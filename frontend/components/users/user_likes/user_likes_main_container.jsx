import { connect } from 'react-redux';
import UserLikesMain from './user_likes_main';
import * as ACTIONS from '../../../actions/user_actions.js';
import * as SUGGESTION_ACTIONS from '../../../actions/suggestion_actions.js';

const mapStateToProps = state => {
  return {
    user: state.user,
    suggestions: state.suggestion.manySuggestions,
    currentUser: state.session.currentUser,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      deleteSingleSuggestion: (id) => dispatch(SUGGESTION_ACTIONS.deleteSingleSuggestion(id)),

      likeSuggestion: (id) => dispatch(SUGGESTION_ACTIONS.likeSuggestion(id)),
      unlikeSuggestion: (id) => dispatch(SUGGESTION_ACTIONS.unlikeSuggestion(id)),
      
      requestLikedSuggestions: (id) => dispatch(ACTIONS.requestLikedSuggestions(id)),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLikesMain);
