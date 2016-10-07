
import { connect } from 'react-redux';
import SingleCity from './single_city';
import * as ACTIONS from '../../actions/place_actions.js';

const mapStateToProps = state => {
  return {
    city: state.place.singleCity,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      requestSingleCity: (id) => dispatch(ACTIONS.requestSingleCity(id)),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCity);
