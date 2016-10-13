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
    this.props.requestPopularCountries();
  }

  render() {

    let popularCities = this.props.popularCities;
    let popularCountries = this.props.popularCountries;
    if (!popularCities || !popularCountries) { return null };

    let citiesList = popularCities.map((city) => {
      return <PopularCityItem key={city.id} place={city} placeTypePlural={"cities"}/>
    })

    let countriesList = popularCountries.map((country) => {
      return <PopularCityItem key={country.id} place={country} placeTypePlural={"countries"}/>
    })

    return (
      <div className="home-sidebar">
        <div className="popular-cities-sidebar">
          <h3>Most Popular Countries</h3>
          <ul className="suggestion-feed-items">
            {countriesList}
          </ul>
        </div>
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
