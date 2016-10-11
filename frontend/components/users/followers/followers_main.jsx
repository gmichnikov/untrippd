import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import FollowersListItem from './followers_list_item';


class FollowersMain extends React.Component {

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

    let followers = this.props.user.followers;
    let first_name = this.props.user.first_name;
    let currentUser = this.props.currentUser;
    if (!followers) { return null; }

    let followersList = followers.map((follower) => {
      return <FollowersListItem key={follower.follower_id} follower={follower} currentUser={currentUser || null} followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} currentUserFollowsUser={follower.current_user_follows_user}/>
    })

    return (
      <div className="followers-main">
        <h3>Followers</h3>
        <div className="followers-list">
          <h4>{first_name}{"'s Followers"} ({followers.length})</h4>
          <ul className="followers-list-items">
            {followersList}
          </ul>
        </div>
      </div>
    )
  }

};

export default FollowersMain;
