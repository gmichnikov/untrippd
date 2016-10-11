import React from 'react';
import { Link } from 'react-router';

class FollowersListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    let f = this.props.follower;
    let currentUser = this.props.currentUser;

    console.log(this.props.currentUserFollowsUser);

    let followButton = <div onClick={() => this.props.followUser(f.follower_id)}>
      <i className="material-icons followers-list-follow">add_circle</i>
    </div>

    let unfollowButton = <div onClick={() => this.props.unfollowUser(f.follower_id)}>
      <i className="material-icons followers-list-unfollow">remove_circle</i>
    </div>

    let correctButton;
    if (currentUser === null || currentUser.id === f.follower_id) {
      correctButton = null;
    } else if (currentUser.followeds_ids.indexOf(f.follower_id) === -1) {
      console.log("Not following");
      correctButton = followButton;
    } else {
      console.log("Following");
      correctButton = unfollowButton;
    }

    return (
      <li className="followers-list-item group">
        <Link to="" className="followers-list-item-photo"></Link>
        <div className="followers-list-item-names">
          <div className="follow-list-item-display-name">
            {f.follower_display_name}
          </div>
          <div className="follow-list-item-username">
            <i className="material-icons icon-person">person</i>
            {f.follower_username}
          </div>
        </div>
        <div className="followers-list-item-button">
          {correctButton}
        </div>
      </li>
    );
  }
}

export default FollowersListItem;
