import { connect } from 'react-redux';
import SignupForm from './signup_form';
import * as ACTIONS from '../../actions/session_actions.js';

const mapStateToProps = state => {
  return {
    loggedIn: state.session.currentUser !== null,
    loginErrors: [],
    signupErrors: state.session.signupErrors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      processSignupForm: (user) => dispatch(ACTIONS.signup(user)),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
