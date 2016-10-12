import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import FollowersMainContainer from './followers_main_container';
import FollowersSidebarContainer from './followers_sidebar_container';
import HomeSidebarContainer from '../../home/home_sidebar_container';

class Followers extends React.Component {

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
        <FollowersMainContainer />
        <HomeSidebarContainer />
      </div>
    )
  }

};

export default Followers;
