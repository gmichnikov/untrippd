import React from 'react';
import PlaceMap from './place_map';
import { Link } from 'react-router';

class PlaceMainTop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    let city = this.props.city;

    let mapComponent = <PlaceMap lat={city.lat} lng={city.lng} />;
    let fullMapLink = `http://maps.google.com/?ie=UTF8&hq=&ll=${city.lat},${city.lng}&z=13`;

    return (
			<section className="place-main-top group">
        <section className="place-main-top-left">
          <div className="place-main-top-image-and-info group">
            <div className="place-main-top-image"></div>
            <div className="place-main-top-info">
              <h1>{city.name}</h1>
              <Link to={city.secondary_link}>{city.secondary_place}</Link>
              <p>{city.num_suggestions}</p>
            </div>
          </div>
          <div className="place-main-top-buttons group">
            <div className="place-main-top-write"></div>
            <div className="place-main-top-book"></div>
          </div>
        </section>
        <section className="place-main-top-map">
          {mapComponent}
  				<a href={fullMapLink} target="_blank">Full Map</a>
        </section>
			</section>
    );
  }
}

export default PlaceMainTop;
