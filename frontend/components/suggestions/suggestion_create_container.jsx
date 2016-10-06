import { connect } from 'react-redux';
import SuggestionForm from './suggestion_form';
import * as ACTIONS from '../../actions/suggestion_actions.js';

const mapStateToProps = state => {
  return {
    // loggedIn: state.session.currentUser !== null,
    // loginErrors: [],
    // signupErrors: state.session.signupErrors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      processSuggestionForm: (suggestion) => dispatch(ACTIONS.CREATE_SUGGESTION(suggestion)),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuggestionForm);
