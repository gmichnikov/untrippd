import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import UserFeedMainContainer from './user_feed_main_container';
import UserFeedSidebarContainer from './user_feed_sidebar_container';
import HomeSidebarContainer from '../../home/home_sidebar_container';
import UserFeedTopContainer from './user_feed_top_container';

class UserFeed extends React.Component {

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
        <div className="user-feed-bottom">
          <UserFeedMainContainer />
          <HomeSidebarContainer />
        </div>
      </div>
    )
  }

};

export default UserFeed;
