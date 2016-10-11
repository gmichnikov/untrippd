import { connect } from 'react-redux';
import LandingPage from './landing_page';
import * as ACTIONS from '../../actions/session_actions.js';
import * as SEARCH_ACTIONS from '../../actions/search_actions.js';

const mapStateToProps = state => {
  return {
    loggedIn: state.session.currentUser !== null,
    errors: state.session.errors,
    searchPlaces: state.search,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      processLoginForm: (user) => dispatch(ACTIONS.login(user)),
      requestAllSearchPlaces: () => dispatch(SEARCH_ACTIONS.requestAllSearchPlaces()),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
