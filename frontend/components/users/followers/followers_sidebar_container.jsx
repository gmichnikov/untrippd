import { connect } from 'react-redux';
import FollowersSidebar from './followers_sidebar';
import * as ACTIONS from '../../../actions/user_actions.js';

const mapStateToProps = state => {
  return {
    // user: state.user,
    // suggestions: state.suggestion.manySuggestions,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      // followUser: (id) => dispatch(ACTIONS.followUser(id)),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowersSidebar);
