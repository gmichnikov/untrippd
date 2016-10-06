
import { connect } from 'react-redux';
import SingleCity from './single_city';
import * as ACTIONS from '../../actions/suggestion_actions.js';

const mapStateToProps = state => {
  return {
    city: state.places.singleCity,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCity);
