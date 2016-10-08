import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';

class PlaceSidebar extends React.Component {

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
      <div className="place-sidebar">
        I will be the sidebar!
      </div>
    )
  }

};

export default PlaceSidebar;
