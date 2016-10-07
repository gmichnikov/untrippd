import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import HomeMainContainer from './home_main_container';

class Home extends React.Component {

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

    return (
      <HomeMainContainer />
    )
  }

};

export default Home;
