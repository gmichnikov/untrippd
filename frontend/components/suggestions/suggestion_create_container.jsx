import { connect } from 'react-redux';
import SuggestionForm from './suggestion_form';
import * as ACTIONS from '../../actions/suggestion_actions.js';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      processSuggestionForm: (suggestion) => dispatch(ACTIONS.createSuggestion(suggestion)),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuggestionForm);
