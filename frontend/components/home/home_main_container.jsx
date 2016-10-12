import { connect } from 'react-redux';
import HomeMain from './home_main';
import * as SESSION_ACTIONS from '../../actions/session_actions.js';
import * as SUGGESTION_ACTIONS from '../../actions/suggestion_actions.js';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    welcomeNotificationStatus: state.session.welcomeNotificationStatus,
    suggestions: state.suggestion.manySuggestions,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeWelcomeNotification: (status) => dispatch(SESSION_ACTIONS.changeWelcomeNotification(status)),

    requestAllSuggestions: () => dispatch(SUGGESTION_ACTIONS.requestAllSuggestions()),
    deleteSingleSuggestion: (id) => dispatch(SUGGESTION_ACTIONS.deleteSingleSuggestion(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeMain);
