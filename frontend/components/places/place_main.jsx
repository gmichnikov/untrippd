import React from 'react';
import SuggestionCreateContainer from '../suggestions/suggestion_create_container';
import PlaceMap from './place_map';
import PlaceMainTop from './place_main_top';
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
    let place_type = this.getPlaceType(nextProps.pathname);

    if (nextProps.pathname !== this.props.pathname) {
      this.props.requestSingleCity(place_type, nextProps.cityId);
    }
  }

  render () {
		let city = this.props.city;
		let citySuggestions = this.props.suggestions;

    if (!city) return <div></div>;

    const feedTitle = `Suggestions about ${city.name}`;

    return (
			<section className="place-main">
        <PlaceMainTop
          city={city}
          currentUser={this.props.currentUser}
        />
        <SuggestionFeed
          suggestions={citySuggestions}
          currentUser={this.props.currentUser}
          deleteSingleSuggestion={this.props.deleteSingleSuggestion}
          feedTitle={feedTitle}
          likeSuggestion={this.props.likeSuggestion}
          unlikeSuggestion={this.props.unlikeSuggestion}
        />
			</section>
    );
  }
}

export default PlaceMain;
