import React from 'react';

class PlaceMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: this.props.lat || 0, lng: this.props.lng || 0},
      zoom: 11
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  }

  componentWillReceiveProps(nextProps) {
    this.map.setCenter({lat: nextProps.lat, lng: nextProps.lng});
  }

  render () {

    return (
			<div id="place-map-container" ref="map">
			</div>
    );
  }
}

export default PlaceMap;