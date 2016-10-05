import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';

const sessionLinks = () => {
  return (
    <div className="session-links">
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </div>
  )
}

const welcomeAndLogout = (currentUser, logout) => {
  return (
    <div className="welcome-and-logout">
      Welcome {currentUser.username}!
      <button onClick={logout}>Log out!</button>
    </div>
  )
}

const Header = ({currentUser, logout}) => {
  const headerVaryingContent = currentUser ?
    welcomeAndLogout(currentUser, logout) :
    sessionLinks();

  return (
    <header>
      <nav className="header-nav">
        <ul className="group">
          <li id="logo"><Link to="/">Untrippd</Link></li>
          <li>The Feed</li>
          <li>Top Places</li>
          <li>Write a Review</li>
          <li>{headerVaryingContent}</li>
          <li id="header-search-bar"></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;
