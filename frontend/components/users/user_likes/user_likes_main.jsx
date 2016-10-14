import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import SuggestionFeed from '../../suggestions/suggestion_feed';

class UserLikesMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    // console.log("mount likes props", this.props.user);
    // this.props.requestLikedSuggestions(this.props.user.username);
  }

  componentWillReceiveProps() {
    // console.log("will receive likes props", this.props.user);
    // this.props.requestLikedSuggestions(this.props.user.username);
  }


  render() {

    let userLikedSuggestions = this.props.suggestions;
    if (!userLikedSuggestions) { return null; }
    console.log("sugglog", userLikedSuggestions);
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
