import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import FollowersMainContainer from './followers_main_container';
import FollowersSidebarContainer from './followers_sidebar_container';
import HomeSidebarContainer from '../../home/home_sidebar_container';
import UserFeedTopContainer from '../user_feed/user_feed_top_container';


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
      <div className="user-feed group" >
        <UserFeedTopContainer />
        <div className="followers group" >
          <FollowersMainContainer />
          <HomeSidebarContainer />
        </div>
      </div>
    )
  }

};

export default Followers;
