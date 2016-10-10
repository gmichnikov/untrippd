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
          </div>
        </div>
        <div className="user-feed-top-profile-photo"></div>
      </div>
    )
  }

};

export default UserFeedTop;
