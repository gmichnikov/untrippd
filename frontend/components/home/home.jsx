import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import HomeMainContainer from './home_main_container';
import HomeSidebarContainer from './home_sidebar_container';

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
      <div className="home group" >
        <HomeMainContainer />
        <HomeSidebarContainer />
      </div>
    )
  }

};

export default Home;
