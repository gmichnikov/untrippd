import { connect } from 'react-redux';
import HomeSidebar from './home_sidebar';
import * as PLACE_ACTIONS from '../../actions/place_actions.js';

const mapStateToProps = state => {
  return {
    popularCities: state.place.popularCities,
    popularCountries: state.place.popularCountries,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestPopularCities: () => dispatch(PLACE_ACTIONS.requestPopularCities()),
    requestPopularCountries: () => dispatch(PLACE_ACTIONS.requestPopularCountries()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeSidebar);
