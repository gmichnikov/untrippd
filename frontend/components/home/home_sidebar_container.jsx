import { connect } from 'react-redux';
import HomeSidebar from './home_sidebar';
// import * as SESSION_ACTIONS from '../../actions/session_actions.js';
import * as PLACE_ACTIONS from '../../actions/place_actions.js';

const mapStateToProps = state => {
  return {
    popularCities: state.place.popularCities,
    // suggestions: state.suggestion.manySuggestions,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // changeWelcomeNotification: (status) => dispatch(SESSION_ACTIONS.changeWelcomeNotification(status)),
    requestPopularCities: () => dispatch(PLACE_ACTIONS.requestPopularCities()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeSidebar);
