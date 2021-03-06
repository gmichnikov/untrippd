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
    let currentUser = this.props.currentUser;

    let followButton = <div className="follow-button" onClick={() => this.props.followUser(user.id)}>
      <i className="material-icons icon-add-circle">add_circle</i>
      <span>Follow</span>
    </div>

    let unfollowButton = <div className="unfollow-button" onClick={() => this.props.unfollowUser(user.id)}>
      <i className="material-icons icon-remove-circle">remove_circle</i>
      <span>Unfollow</span>
    </div>

    let correctButton;
    if (this.props.currentUser === null || currentUser.id === user.id) {
      correctButton = null;
    } else if (currentUser.followeds_ids.indexOf(user.id) === -1) {
      correctButton = followButton;
    } else {
      correctButton = unfollowButton;
    }

    let linkUserFeed = `/users/${user.username}`;
    let linkUserLikes = `/users/${user.username}/likes`;
    let linkFollowersList = `/users/${user.username}/followers`;
    let linkFollowedsList = `/users/${user.username}/follows`;

    let numFolloweds = user.num_followeds;
    if (user.id === currentUser.id) {
      numFolloweds = currentUser.followeds_ids.length;
    }

    let pluralSuggestions = (user.num_suggestions === 1 ? "suggestion" : "suggestions");
    let pluralLikes = (user.num_liked_suggestions === 1 ? "like" : "likes");
    let pluralFollows = (numFolloweds === 1 ? "follow" : "follows");
    let pluralFollowers = (user.num_followers === 1 ? "follower" : "followers");

    return (
      <div className="user-feed-top">
        <div className="user-feed-top-names">
          <h1>{user.full_name}</h1>
          <i className="material-icons icon-person">person</i>
          <span>{user.username}</span>
        </div>
        <div className="user-feed-top-stats-bar">
          <div className="user-feed-top-stats">
            <Link to={linkUserFeed}>
              <span className="user-feed-top-stats-num">{user.num_suggestions}</span>
              <span className="user-feed-top-stats-label">{pluralSuggestions}</span>
            </Link>
            <Link to={linkUserLikes}>
              <span className="user-feed-top-stats-num">{user.num_liked_suggestions}</span>
              <span className="user-feed-top-stats-label">{pluralLikes}</span>
            </Link>
            <Link to={linkFollowedsList}>
              <span className="user-feed-top-stats-num">{numFolloweds}</span>
              <span className="user-feed-top-stats-label">{pluralFollows}</span>
            </Link>
            <Link to={linkFollowersList}>
              <span className="user-feed-top-stats-num">{user.num_followers}</span>
              <span className="user-feed-top-stats-label">{pluralFollowers}</span>
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
