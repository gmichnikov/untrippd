import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';

const sessionLinks = () => {
  return (
    <div className="session-links">
      <li><Link to="/login">Sign In</Link></li>
      <li><Link to="/signup">Join Now</Link></li>
    </div>
  )
}

const welcomeAndLogout = (currentUser, logout) => {
  return (
    <div className="welcome-and-logout">
      <span className="header-current-user">{currentUser.username}
        <ul className="user-dropdown">
          <li>
            <ul>
              <li><a href="#">My Suggestions</a></li>
              <li><a href="#">My Guidebooks</a></li>
              <li><a href="#">My Follows</a></li>
              <li><a href="#">My Followers</a></li>
              <li><a href="#">My Places</a></li>
              <li><button onClick={logout}>Log out!</button></li>

            </ul>
          </li>
        </ul>
      </span>
    </div>
  )
}

const Header = ({currentUser, logout}) => {

  const headerVaryingContent = currentUser ?
    welcomeAndLogout(currentUser, logout) :
    sessionLinks();

  return (
    <header className="header-main">
      <nav className="header-nav">
        <ul className="group">
          <li className="header-logo"><Link to="/">Untrippd</Link><span>Travel Socially</span></li>
          <li>The Feed</li>
          <li>Top Places</li>
          <li>Write a Review</li>
          {headerVaryingContent}
          <li id="header-search-bar"></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;
