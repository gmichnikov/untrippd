import { connect } from 'react-redux';
import SingleCity from './single_city';
import * as ACTIONS from '../../actions/place_actions.js';

const mapStateToProps = state => {
  return {
    city: state.place.singleCity,
    suggestions: state.suggestion.manySuggestions,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      requestSingleCity: (place_type, id) => dispatch(ACTIONS.requestSingleCity(place_type, id)),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCity);
