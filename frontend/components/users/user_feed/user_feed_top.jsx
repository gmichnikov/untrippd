import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';

class UserFeedTop extends React.Component {

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
    let user = this.props.user;
    let followText = user.followed_by_current_user ? "Yes" : "No"

    let followButton = <div className="follow-button" onClick={() => this.props.followUser(user.id)}>
      <i className="material-icons icon-add-circle">add_circle</i>
      <span>Follow</span>
    </div>

    let unfollowButton = <div className="unfollow-button" onClick={() => this.props.unfollowUser(user.id)}>
      <i className="material-icons icon-remove-circle">remove_circle</i>
      <span>Unfollow</span>
    </div>

    let correctButton = user.followed_by_current_user ? unfollowButton : followButton

    return (
      <div className="user-feed-top">
        <div className="user-feed-top-names">
          <h1>{user.full_name}</h1>
          <i className="material-icons icon-person">person</i>
          <span>{user.username}</span>
        </div>
        <div className="user-feed-top-stats-bar">
          <div className="user-feed-top-stats">
            <Link to="#">
              <span className="user-feed-top-stats-num">{user.num_suggestions}</span>
              <span className="user-feed-top-stats-label">suggestions</span>
            </Link>
            <Link to="">
              <span className="user-feed-top-stats-num">{user.num_unique_suggestions}</span>
              <span className="user-feed-top-stats-label">unique</span>
            </Link>
            <Link to="">
              <span className="user-feed-top-stats-num">#</span>
              <span className="user-feed-top-stats-label">follows</span>
            </Link>
            <Link to="">
              <span className="user-feed-top-stats-num">#</span>
              <span className="user-feed-top-stats-label">followers</span>
            </Link>
            <Link to="">
              <span className="user-feed-top-stats-num">#</span>
              <span className="user-feed-top-stats-label">guidebooks</span>
            </Link>
            <Link to="">
              <span className="user-feed-top-stats-num">#</span>
              <span className="user-feed-top-stats-label">places</span>
            </Link>
            <Link to="">
              <span className="user-feed-top-stats-num">{followText}</span>
              <span className="user-feed-top-stats-label">follow?</span>
            </Link>
          </div>
        </div>
        {correctButton}
        <div className="user-feed-top-profile-photo"></div>
      </div>
    )
  }

};

export default UserFeedTop;
