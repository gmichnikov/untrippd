import React from 'react';
import SuggestionCreateContainer from '../suggestions/suggestion_create_container';
import PlaceMap from './place_map';
import { Link } from 'react-router';
import SuggestionFeed from '../suggestions/suggestion_feed';

class SingleCity extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.requestSingleCity(this.props.params.cityId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.cityId !== this.props.params.cityId) {
      this.props.requestSingleCity(nextProps.params.cityId);
    }
  }

  render () {
		let city = this.props.city;
		let mapComponent = city.id ? <PlaceMap lat={city.lat} lng={city.lng} /> : null
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

export default SingleCity;
