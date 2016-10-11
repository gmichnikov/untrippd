import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import PlaceMainContainer from './place_main_container';
import PlaceSidebarContainer from './place_sidebar_container';

class Place extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }


  render() {
    return (
      <div className="place group" >
        <PlaceMainContainer pathname={this.props.location.pathname} cityId={this.props.params.cityId}/>
        <PlaceSidebarContainer />
      </div>
    )
  }

};

export default Place;
