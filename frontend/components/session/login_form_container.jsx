import { connect } from 'react-redux';
import LoginForm from './login_form';
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
)(LoginForm);
