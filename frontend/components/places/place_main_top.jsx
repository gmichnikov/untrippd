import React from 'react';

class PlaceMainTop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    let city = this.props.city;

    return (
			<ul>
				<li>place type: {city.place_type_name}</li>
				<li>name: {city.name}</li>
			</ul>
    );
  }
}

export default PlaceMainTop;
