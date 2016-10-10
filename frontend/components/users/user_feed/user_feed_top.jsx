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

    return (
      <div className="user-feed-top">
        I am at the top
      </div>
    )
  }

};

export default UserFeedTop;
