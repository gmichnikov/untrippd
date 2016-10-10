import { connect } from 'react-redux';
import UserFeedTop from './user_feed_top';
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
      followUser: (id) => dispatch(ACTIONS.followUser(id)),
      unfollowUser: (id) => dispatch(ACTIONS.unfollowUser(id)),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserFeedTop);
