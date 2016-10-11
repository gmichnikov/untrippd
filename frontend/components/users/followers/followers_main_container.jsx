import { connect } from 'react-redux';
import FollowersMain from './followers_main';
import * as ACTIONS from '../../../actions/user_actions.js';

const mapStateToProps = state => {
  return {
    user: state.user,
    currentUser: state.session.currentUser
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
)(FollowersMain);
