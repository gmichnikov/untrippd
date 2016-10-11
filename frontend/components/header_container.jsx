import { connect } from 'react-redux';
import Header from './header';
import * as ACTIONS from '../actions/session_actions.js';
import * as SEARCH_ACTIONS from '../actions/search_actions.js';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    searchPlaces: state.search,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(ACTIONS.logout()),
    requestAllSearchPlaces: () => dispatch(SEARCH_ACTIONS.requestAllSearchPlaces()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
