import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import UserLikesMainContainer from './user_likes_main_container';
import HomeSidebarContainer from '../../home/home_sidebar_container';
import UserFeedTopContainer from '../user_feed/user_feed_top_container';

class UserLikes extends React.Component {

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
          <UserLikesMainContainer />
          <HomeSidebarContainer />
        </div>
      </div>
    )
  }

};

export default UserLikes;
