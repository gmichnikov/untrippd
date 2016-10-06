import React from 'react';

const singleCity = ({ city }) => (
	<section className="single-city">
		<ul>
			<li>city: {city.name}</li>
			<li>region: {city.region_name}</li>
			<li>country: {city.country_name}</li>
		</ul>
	</section>
);

export default singleCity;
