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
    let username = this.props.user.username;
    let currentUser = this.props.currentUser;
    if (!followers) { return null; }

    let followersList = followers.map((follower) => {
      return <FollowersListItem key={follower.id} follower={follower} currentUser={currentUser || null} followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} currentUserFollowsUser={follower.current_user_follows_user}/>
    })

    let linkFollows = `/users/${username}/follows`;
    let linkFeed = `/users/${username}`;

    return (
      <div className="followers-main">
        <ul className="follow-tabs group">
          <li className="follow-tabs-active"><Link to="">Followers</Link></li>
          <li><Link to={linkFollows}>Follows</Link></li>
        </ul>
        <div className="followers-list">
          <h4><Link to={linkFeed}>{first_name}</Link>{"'s Followers"} ({followers.length})</h4>
          <ul className="followers-list-items">
            {followersList}
          </ul>
        </div>
      </div>
    )
  }

};

export default FollowersMain;
