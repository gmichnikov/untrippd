import { connect } from 'react-redux';
import UserFeedMain from './user_feed_main';
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

    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserFeedMain);
