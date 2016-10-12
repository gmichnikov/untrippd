import { connect } from 'react-redux';
import FollowedsMain from './followeds_main';
import * as ACTIONS from '../../../actions/user_actions.js';

const mapStateToProps = state => {
  return {
    user: state.user,
    followeds: state.user.followeds,
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
)(FollowedsMain);
