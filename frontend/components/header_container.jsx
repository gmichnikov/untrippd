import { connect } from 'react-redux';
import Header from './header';
import * as ACTIONS from '../actions/session_actions.js';
import * as SEARCH_ACTIONS from '../actions/search_actions.js';
import * as PLACE_ACTIONS from '../actions/place_actions.js';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    randomCity: state.place.randomCity,
    currentCityId: state.place.singleCity.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(ACTIONS.logout()),
    requestRandomCity: () => dispatch(PLACE_ACTIONS.requestRandomCity()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
