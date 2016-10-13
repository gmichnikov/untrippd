import React from 'react';
import { Link } from 'react-router';

class PopularCityItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    let c = this.props.place;
    let placeLink = `/${this.props.placeTypePlural}/${c.id}`;
    let pluralSuggestionsText = (c.count === 1 ? " suggestion" : " suggestions");

    return (
      <li className="popular-city">
          <div className="popular-city-name">
            <Link to={placeLink}>{c.display_name}</Link>
          </div>
          <div className="popular-city-num-suggestions">
            {c.count}{pluralSuggestionsText}
          </div>
      </li>
    );
  }
}

export default PopularCityItem;
