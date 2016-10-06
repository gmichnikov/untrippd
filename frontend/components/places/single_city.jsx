import React from 'react';
import SuggestionCreateContainer from '../suggestions/suggestion_create_container';

const singleCity = ({ city }) => (
	<section className="single-city">
		<ul>
			<li>city: {city.name}</li>
			<li>region: {city.region_name}</li>
			<li>country: {city.country_name}</li>
		</ul>
		<SuggestionCreateContainer placeType={city.place_type_name} placeId={city.id}/>
	</section>
);

export default singleCity;
