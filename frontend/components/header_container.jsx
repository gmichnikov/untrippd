import { connect } from 'react-redux';
import Header from './header';
import * as ACTIONS from '../actions/session_actions.js';
import * as SEARCH_ACTIONS from '../actions/search_actions.js';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(ACTIONS.logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
