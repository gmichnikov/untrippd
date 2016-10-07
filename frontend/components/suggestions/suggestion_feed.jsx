import React from 'react';
import SuggestionFeedItem from './suggestion_feed_item';
import Toggle from 'react-toggle'

class SuggestionFeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      onlyFood: false,
      onlyAttraction: false,
      onlyAccommodation: false,
      onlyHighlight: false,
      onlyFollowedUsers: false,
      onlyFollowedPlaces: false,
    };
  }


  updateCheckbox(property) {
    return e => this.setState({[property]: e.target.checked});
  }


  render () {
    console.log("rendering feed", this.state.onlyFood);

    if (!this.props.suggestions) {
      return null;
    }

    let suggestionsToShow = this.props.suggestions;

    if (this.state.onlyFood) {
      suggestionsToShow = suggestionsToShow.filter((sugg) => {
        return sugg.food;
      });
    }

    if (this.state.onlyAttraction) {
      suggestionsToShow = suggestionsToShow.filter((sugg) => {
        return sugg.attraction;
      });
    }

    if (this.state.onlyAccommodation) {
      suggestionsToShow = suggestionsToShow.filter((sugg) => {
        return sugg.accommodation;
      });
    }

    if (this.state.onlyHighlight) {
      suggestionsToShow = suggestionsToShow.filter((sugg) => {
        return sugg.highlight;
      });
    }

    let feed = suggestionsToShow.map((suggestion, i) => {
      return <SuggestionFeedItem key={suggestion.id} suggestion={suggestion} />
    })


    return (
			<section className="single-city-suggestion-feed">
        <section className="suggestion-feed-filter-section">
          <form className="suggestion-feed-filter-form">
            <p>Only show suggestions marked as highlights</p>
              <Toggle
                checked={this.state.onlyHighlight}
                onClick={this.updateCheckbox('onlyHighlight')}
              />
            <br />
            <p>Only show suggestions about ... </p>
            <label>Food</label>
            <Toggle
              checked={this.state.onlyFood}
              onClick={this.updateCheckbox('onlyFood')}
            />
            <label>Attractions</label>
            <Toggle
              checked={this.state.onlyAttraction}
              onClick={this.updateCheckbox('onlyAttraction')}
            />
            <label>Accommodations</label>
            <Toggle
              checked={this.state.onlyAccommodation}
              onClick={this.updateCheckbox('onlyAccommodation')}
            />
          </form>
        </section>
				<ul className="suggestion-feed">
          {feed}
				</ul>
			</section>
    );
  }
}

export default SuggestionFeed;
