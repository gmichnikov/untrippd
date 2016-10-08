import { connect } from 'react-redux';
import PlaceSidebar from './place_sidebar';

const mapStateToProps = state => {
  return { currentUser: state.session.currentUser, };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceSidebar);
