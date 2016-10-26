import React from 'react';

class PlaceMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const mapDOMNode = this.refs[this.props.refName];

    const mapOptions = {
      center: {lat: this.props.lat || 0, lng: this.props.lng || 0},
      zoom: this.props.zoom
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    if (this.props.lat && this.props.lng) {
      this.pos = new google.maps.LatLng(this.props.lat, this.props.lng);
      this.marker = new google.maps.Marker({ position: this.pos, map: this.map });
    }

  }

  componentWillReceiveProps(nextProps) {
    this.map.setCenter({lat: nextProps.lat, lng: nextProps.lng});
  }

  render () {

    const klassName = (this.props.refName === "place-map" ? "place-map-container" : "feed-map-container");

    return (
			<div className={klassName} ref={this.props.refName}>
			</div>
    );
  }
}

export default PlaceMap;
