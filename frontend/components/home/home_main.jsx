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
    }, 1500);

    this.props.requestAllSuggestions();
  }

  componentWillUnmount() {
    clearTimeout(this.welcomeTimeout);
  }


  render() {

    let messageText = this.props.welcomeNotificationStatus ? this.props.welcomeNotificationStatus : "";

    let feedTitle = "All Recent Activity";
    let barStyle = {backgroundColor: "rgb(255, 204, 0)", color: "white", width: "200px", textAlign: "center", fontSize: "18px"};

    return (
      <div className="home-main">
        <Notification isActive={this.state.notificationActive} message={messageText} barStyle={barStyle} />
        <SuggestionFeed suggestions={this.props.suggestions} currentUser={this.props.currentUser} deleteSingleSuggestion={this.props.deleteSingleSuggestion} feedTitle={feedTitle}/>
      </div>
    )
  }

};

export default HomeMain;
