import { connect } from 'react-redux';
import LoginForm from './login_form';
import * as ACTIONS from '../../actions/session_actions.js';

const mapStateToProps = state => {
  return {
    loggedIn: state.session.currentUser !== null,
    signupErrors: state.session.signupErrors,
    loginErrors: state.session.loginErrors,
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
)(LoginForm);
