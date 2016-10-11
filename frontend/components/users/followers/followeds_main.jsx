import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import FollowersListItem from './followers_list_item';


class FollowedsMain extends React.Component {

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

    let followeds = this.props.user.followeds;
    let first_name = this.props.user.first_name;
    let currentUser = this.props.currentUser;
    if (!followeds) { return null; }

    let followedsList = followeds.map((followed) => {
      return <FollowersListItem key={followed.id} follower={followed} currentUser={currentUser || null} followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} currentUserFollowsUser={followed.current_user_follows_user}/>
    })

    let linkFollowers = `/users/${currentUser.username}/followers`;

    return (
      <div className="followers-main">
        <ul className="follow-tabs group">
          <li><Link to={linkFollowers}>Followers</Link></li>
          <li className="follow-tabs-active"><Link to="">Follows</Link></li>
        </ul>
        <div className="followers-list">
          <h4>{first_name}{"'s Follows"} ({followeds.length})</h4>
          <ul className="followers-list-items">
            {followedsList}
          </ul>
        </div>
      </div>
    )
  }

};

export default FollowedsMain;
