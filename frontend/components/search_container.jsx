import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = state => {
  return {
    // loggedIn: state.session.currentUser !== null,
    // loginErrors: [],
    // signupErrors: state.session.signupErrors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
