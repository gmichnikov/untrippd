import React from 'react';
import SuggestionCreateContainer from '../suggestions/suggestion_create_container';
import PlaceMap from './place_map';
import { Link } from 'react-router';
import SuggestionFeed from '../suggestions/suggestion_feed';

class PlaceMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getPlaceType(pathname) {
    let re = /\/(.*)\//;
    let matchesArr = re.exec(pathname);
    return matchesArr[1];
  }

  componentDidMount() {
    let place_type = this.getPlaceType(this.props.pathname);
    this.props.requestSingleCity(place_type, this.props.cityId);
  }

  componentWillReceiveProps(nextProps) {
    console.log("place main props", nextProps);
    let place_type = this.getPlaceType(nextProps.pathname);

    if (nextProps.pathname !== this.props.pathname) {
      this.props.requestSingleCity(place_type, nextProps.cityId);
    }
  }

  render () {
		let city = this.props.city;
		let citySuggestions = this.props.suggestions;

    if (!city) return <div></div>;

		let mapComponent = <PlaceMap lat={city.lat} lng={city.lng} />;
    let fullMapLink = `http://maps.google.com/?ie=UTF8&hq=&ll=${city.lat},${city.lng}&z=13`;

    return (
			<section className="place-main">
				<ul>
					<li>place type: {city.place_type_name}</li>
					<li>name: {city.name}</li>
				</ul>
        <SuggestionFeed suggestions={citySuggestions} />
				{mapComponent}
				<a href={fullMapLink} target="_blank">Full Map</a>
        <SuggestionCreateContainer placeType={city.place_type_name} placeId={city.id}/>
			</section>
    );
  }
}

export default PlaceMain;