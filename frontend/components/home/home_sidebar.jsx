import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';

class HomeSidebar extends React.Component {

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
      <div className="home-sidebar">
        <h3>Most suggested cities</h3>
      </div>
    )
  }

};

export default HomeSidebar;
