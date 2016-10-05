import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import HeaderContainer from '../header_container';
import { Notification } from 'react-notification';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notificationActive: window.localStorage.welcomeNote === "true",
    }
  }

  componentDidMount() {
    this.welcomeTimeout = setTimeout(() => {
      this.setState({notificationActive: false});
      window.localStorage.setItem("welcomeNote", "false");
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.welcomeTimeout);
  }


  render() {
    return (
      <div>
        <Notification isActive={this.state.notificationActive} message={"Home Page Notification!"} />
        <h1>Home Page</h1>
        <Link to="/places">Places</Link>
      </div>
    )
  }

};

export default Home;
