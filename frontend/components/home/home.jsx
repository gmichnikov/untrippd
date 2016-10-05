import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import HeaderContainer from '../header_container';
import { Notification } from 'react-notification';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notificationActive: this.props.welcomeNotificationStatus !== null,
    }
  }

  componentDidMount() {
    this.welcomeTimeout = setTimeout(() => {
      this.setState({notificationActive: false});
      this.props.changeWelcomeNotification(null);
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.welcomeTimeout);
  }


  render() {

    let messageText = this.props.welcomeNotificationStatus ? this.props.welcomeNotificationStatus : "";

    return (
      <div>
        <Notification isActive={this.state.notificationActive} message={messageText} />
        <h1>Home Page</h1>
        <Link to="/places">Places</Link>
      </div>
    )
  }

};

export default Home;
