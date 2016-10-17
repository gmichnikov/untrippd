import { connect } from 'react-redux';
import FollowersSidebar from './followers_sidebar';
import * as ACTIONS from '../../../actions/user_actions.js';

const mapStateToProps = state => {
  return {
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowersSidebar);
