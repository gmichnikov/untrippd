import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';

class UserFeedMain extends React.Component {

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
      <div className="user-feed-main">
        I will be the main section!
      </div>
    )
  }

};

export default UserFeedMain;
