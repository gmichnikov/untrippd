import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import HeaderContainer from '../header_container';

const Places = ({currentUser}) => {
  return (
    <div>
      <h1>Places Page</h1>
      <Link to="/home">Home</Link>
    </div>
  )
};

export default Places;
