import React from 'react';
import SuggestionCreateContainer from '../suggestions/suggestion_create_container';
import PlaceMap from './place_map';
import { Link } from 'react-router';
import SuggestionFeed from '../suggestions/suggestion_feed';

class singleCity extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
		let city = this.props.city;
		console.log("city", city);
		let mapComponent = city.lat ? <PlaceMap city={city} lat={city.lat} lng={city.lng} /> : ""
    let fullMapLink = `http://maps.google.com/?ie=UTF8&hq=&ll=${city.lat},${city.lng}&z=13`;


    return (
			<section className="single-city">
				<ul>
					<li>city: {city.name}</li>
					<li>region: {city.region_name}</li>
					<li>country: {city.country_name}</li>
				</ul>
				<SuggestionCreateContainer placeType={city.place_type_name} placeId={city.id}/>
        <SuggestionFeed placeName={city.name} suggestions={city.suggestions} />
				{mapComponent}
				<a href={fullMapLink} target="_blank">Full Map</a>
			</section>
    );
  }
}

export default singleCity;
