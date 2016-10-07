import { connect } from 'react-redux';
import HomeSidebar from './home_sidebar';
// import * as SESSION_ACTIONS from '../../actions/session_actions.js';
// import * as SUGGESTION_ACTIONS from '../../actions/suggestion_actions.js';

const mapStateToProps = state => {
  return {
    // currentUser: state.session.currentUser,
    // suggestions: state.suggestion.manySuggestions,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // changeWelcomeNotification: (status) => dispatch(SESSION_ACTIONS.changeWelcomeNotification(status)),
    // requestAllSuggestions: () => dispatch(SUGGESTION_ACTIONS.requestAllSuggestions())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeSidebar);
