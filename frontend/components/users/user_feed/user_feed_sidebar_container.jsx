import { connect } from 'react-redux';
import UserFeedSidebar from './user_feed_sidebar';
import * as ACTIONS from '../../../actions/user_actions.js';

const mapStateToProps = state => {
  return {
    user: state.user,
    suggestions: state.suggestion.manySuggestions,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserFeedSidebar);
