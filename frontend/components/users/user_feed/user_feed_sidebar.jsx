import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';

class UserFeedSidebar extends React.Component {

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
      <div className="user-feed-sidebar">
        I will be the sidebar!
      </div>
    )
  }

};

export default UserFeedSidebar;
