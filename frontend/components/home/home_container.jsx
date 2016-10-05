import { connect } from 'react-redux';
import Home from './home';
import * as ACTIONS from '../../actions/session_actions.js';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    welcomeNotificationStatus: state.session.welcomeNotificationStatus,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeWelcomeNotification: (status) => dispatch(ACTIONS.changeWelcomeNotification(status)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
