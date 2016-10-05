import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import HeaderContainer from '../header_container';

const Home = ({currentUser}) => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/places">Places</Link>
    </div>
  )
};

export default Home;
