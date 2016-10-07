import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import HeaderContainer from '../header_container';
import { Notification } from 'react-notification';
import SuggestionFeed from '../suggestions/suggestion_feed';

class HomeMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notificationActive: this.props.welcomeNotificationStatus ? true : false,
    }
  }

  componentDidMount() {
    this.welcomeTimeout = setTimeout(() => {
      this.setState({notificationActive: false});
      this.props.changeWelcomeNotification(null);
    }, 2000);

    this.props.requestAllSuggestions();
  }

  componentWillUnmount() {
    clearTimeout(this.welcomeTimeout);
  }


  render() {

    let messageText = this.props.welcomeNotificationStatus ? this.props.welcomeNotificationStatus : "";

    return (
      <div>
        <Notification isActive={this.state.notificationActive} message={messageText} />
        <SuggestionFeed suggestions={this.props.suggestions} />
      </div>
    )
  }

};

export default HomeMain;
