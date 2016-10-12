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
    const feedTitle = `${this.props.user.first_name}'s suggestions`;

    return (
      <div className="user-feed-main">
        <SuggestionFeed suggestions={userSuggestions} currentUser={this.props.currentUser} deleteSingleSuggestion={this.props.deleteSingleSuggestion} feedTitle={feedTitle}/>
      </div>
    )
  }

};

export default UserFeedMain;
