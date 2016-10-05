import { connect } from 'react-redux';
import LandingPage from './landing_page';
import * as ACTIONS from '../../actions/session_actions.js';

const mapStateToProps = state => {
  return {
    loggedIn: state.session.currentUser !== null,
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      processLoginForm: (user) => dispatch(ACTIONS.login(user)),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
