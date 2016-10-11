import { connect } from 'react-redux';
import UserFeedMain from './user_feed_main';
import * as ACTIONS from '../../../actions/user_actions.js';

const mapStateToProps = state => {
  return {
    user: state.user,
    suggestions: state.suggestion.manySuggestions,
    currentUser: state.session.currentUser,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserFeedMain);
