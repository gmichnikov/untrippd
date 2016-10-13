import { connect } from 'react-redux';
import PlaceMain from './place_main';
import * as ACTIONS from '../../actions/place_actions.js';
import * as SUGGESTION_ACTIONS from '../../actions/suggestion_actions.js';

const mapStateToProps = state => {
  return {
    city: state.place.singleCity,
    suggestions: state.suggestion.manySuggestions,
    currentUser: state.session.currentUser,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      requestSingleCity: (place_type, id) => dispatch(ACTIONS.requestSingleCity(place_type, id)),
      deleteSingleSuggestion: (id) => dispatch(SUGGESTION_ACTIONS.deleteSingleSuggestion(id)),
      likeSuggestion: (id) => dispatch(SUGGESTION_ACTIONS.likeSuggestion(id)),
      unlikeSuggestion: (id) => dispatch(SUGGESTION_ACTIONS.unlikeSuggestion(id)),

    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceMain);
