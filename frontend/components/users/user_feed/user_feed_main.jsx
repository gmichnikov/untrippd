import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import SuggestionFeed from '../../suggestions/suggestion_feed';

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

    let userSuggestions = this.props.suggestions;

    return (
      <div className="user-feed-main">
        <SuggestionFeed suggestions={userSuggestions} currentUser={currentUser} />
      </div>
    )
  }

};

export default UserFeedMain;
