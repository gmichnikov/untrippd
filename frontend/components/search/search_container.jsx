import { connect } from 'react-redux';
import Search from './search';
import * as ACTIONS from '../../actions/search_actions';

const mapStateToProps = state => {
  return {
    searchPlaces: state.search,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      requestAllSearchPlaces: () => dispatch(ACTIONS.requestAllSearchPlaces()),
      requestFilteredSearchPlaces: (query) => dispatch(ACTIONS.requestFilteredSearchPlaces(query)),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
