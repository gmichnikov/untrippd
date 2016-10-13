import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link, withRouter } from 'react-router';
import SearchContainer from './search/search_container';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
    this.goExplore = this.goExplore.bind(this);
  }

  componentDidMount() {
    this.props.requestRandomCity();
  }

  componentWillReceiveProps() {
  }

  goExplore(exploreLink) {
    this.props.router.push(exploreLink);
  }

  render() {

    let currentUser = this.props.currentUser;
    let logout = this.props.logout;

    let randomCity = this.props.randomCity;
    let exploreLink = "";
    if(!randomCity[0]) {
      return null;
    }
    if (randomCity && randomCity.length == 2) {
      exploreLink = `/cities/${randomCity[0]}`;
    }

    if (this.props.currentCityId === this.props.randomCity[0]) {
      exploreLink = `/cities/${randomCity[1]}`;
    }

    const sessionLinks = () => {
      return (
        <div className="session-links">
          <li><Link to="/login">Sign In</Link></li>
          <li><Link to="/signup">Join Now</Link></li>
        </div>
      )
    }

    const welcomeAndLogout = (currentUser, logout) => {

      let linkUserFeed = `/users/${currentUser.username}`;
      let linkUserLikes = `/users/${currentUser.username}/likes`;
      let linkFollowersList = `/users/${currentUser.username}/followers`;
      let linkFollowsList = `/users/${currentUser.username}/follows`;

      return (
        <div className="welcome-and-logout">
          <span className="header-current-user">{currentUser.username}
            <ul className="user-dropdown">
              <li>
                <ul>
                  <li><Link to={linkUserFeed}>My Suggestions</Link></li>
                  <li><Link to={linkUserLikes}>My Likes</Link></li>
                  <li><Link to={linkFollowsList}>My Follows</Link></li>
                  <li><Link to={linkFollowersList}>My Followers</Link></li>
                  <li><button onClick={logout}>Log out!</button></li>
                </ul>
              </li>
            </ul>
          </span>
        </div>
      )
    }

    const headerVaryingContent = currentUser ?
      welcomeAndLogout(currentUser, logout) :
      sessionLinks();

    return (
      <header className="header-main">
        <nav className="header-nav">
          <ul className="group">
            <li className="header-logo"><Link to="/">Untrippd</Link><Link to="/"><span>Travel Socially</span></Link></li>
            <li><Link to="/home">The Feed</Link></li>
            <li className="explore-link" onClick={() => this.goExplore(exploreLink)}>Explore the World</li>
            <SearchContainer />
            {headerVaryingContent}
          </ul>
        </nav>
      </header>
    )
  }
};

export default withRouter(Header);
