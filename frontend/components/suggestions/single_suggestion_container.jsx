import { connect } from 'react-redux';
import SingleSuggestion from './single_suggestion';
import * as ACTIONS from '../../actions/suggestion_actions.js';

const mapStateToProps = state => {
  console.log("single suggestion state", state);
  return {
    suggestion: state.suggestion.singleSuggestion,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleSuggestion);
