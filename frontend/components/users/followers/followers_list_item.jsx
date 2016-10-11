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

    let followButton = <div onClick={() => this.props.followUser(f.id)}>
      <i className="material-icons followers-list-follow">add_circle</i>
    </div>

    let unfollowButton = <div onClick={() => this.props.unfollowUser(f.id)}>
      <i className="material-icons followers-list-unfollow">remove_circle</i>
    </div>

    let correctButton;
    if (currentUser === null || currentUser.id === f.id) {
      correctButton = null;
    } else if (currentUser.followeds_ids.indexOf(f.id) === -1) {
      correctButton = followButton;
    } else {
      correctButton = unfollowButton;
    }

    let linkOtherUserFeed = `/users/${f.username}`;

    return (
      <li className="followers-list-item group">
        <Link to={linkOtherUserFeed} className="followers-list-item-photo"></Link>
        <div className="followers-list-item-names">
          <div className="follow-list-item-display-name">
            <Link to={linkOtherUserFeed}>{f.display_name}</Link>
          </div>
          <div className="follow-list-item-username">
            <Link to={linkOtherUserFeed}><i className="material-icons icon-person">person</i>
            {f.username}</Link>
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
