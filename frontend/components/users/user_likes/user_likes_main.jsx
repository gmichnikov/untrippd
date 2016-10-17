import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import SuggestionFeed from '../../suggestions/suggestion_feed';

class UserLikesMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    let userLikedSuggestions = this.props.suggestions;
    if (!userLikedSuggestions) { return null; }
    const feedTitle = `Suggestions Liked by ${this.props.user.first_name}`;

    return (
      <div className="user-feed-main">
        <SuggestionFeed
          suggestions={userLikedSuggestions}
          currentUser={this.props.currentUser}
          deleteSingleSuggestion={this.props.deleteSingleSuggestion}
          feedTitle={feedTitle}
          likeSuggestion={this.props.likeSuggestion}
          unlikeSuggestion={this.props.unlikeSuggestion}
        />
      </div>
    )
  }

};

export default UserLikesMain;
