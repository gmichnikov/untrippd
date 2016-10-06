import React from 'react';

class PlaceMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const mapDOMNode = this.refs.map;

    console.log("latlng",this.props.lat, this.props.lng);
    console.log(this.props.city);

    const mapOptions = {
      center: {lat: this.props.lat, lng: this.props.lng},
      zoom: 12
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  }

  render () {
    return (
			<div id="place-map-container" ref="map">
			</div>
    );
  }
}

export default PlaceMap;
