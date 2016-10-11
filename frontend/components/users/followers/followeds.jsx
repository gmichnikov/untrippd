import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import FollowedsMainContainer from './followeds_main_container';
import FollowersSidebarContainer from './followers_sidebar_container';

class Followeds extends React.Component {

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
      <div className="followers group" >
        <FollowedsMainContainer />
        <FollowersSidebarContainer />
      </div>
    )
  }

};

export default Followeds;
