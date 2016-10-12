import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import PopularCityItem from '../places/popular_city_item';

class HomeSidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.props.requestPopularCities();
  }

  render() {

    let popularCities = this.props.popularCities;
    if (!popularCities) { return null };

    let citiesList = popularCities.map((city) => {
      return <PopularCityItem key={city.id} city={city} />
    })

    return (
      <div className="home-sidebar">
        <div className="popular-cities-sidebar">
          <h3>Most Popular Cities</h3>
          <ul className="suggestion-feed-items">
            {citiesList}
          </ul>
        </div>
      </div>
    )
  }

};

export default HomeSidebar;
