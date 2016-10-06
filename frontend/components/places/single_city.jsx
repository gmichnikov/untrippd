import React from 'react';
import SuggestionCreateContainer from '../suggestions/suggestion_create_container';

class singleCity extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
		let city = this.props.city;

    return (
			<section className="single-city">
				<ul>
					<li>city: {city.name}</li>
					<li>region: {city.region_name}</li>
					<li>country: {city.country_name}</li>
				</ul>
				<SuggestionCreateContainer placeType={city.place_type_name} placeId={city.id}/>
			</section>
    );
  }
}

export default singleCity;
