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

    if (!this.props.suggestions) {
      return null;
    }
    let currentUser = this.props.currentUser;

    let suggestionsToShow = this.props.suggestions;

    let followedsIds;
    if (currentUser) {
      followedsIds = this.props.currentUser.followeds_ids;
    }

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

    if (currentUser && this.state.onlyFollowedUsers) {
      suggestionsToShow = suggestionsToShow.filter((sugg) => {
        return followedsIds.indexOf(sugg.author_id) !== -1;
      });
    }

    let byFollowedUser;
    let ownSuggestion;
    let feed = suggestionsToShow.map((suggestion, i) => {
      ownSuggestion = false;
      if (currentUser) {
        byFollowedUser = (followedsIds.indexOf(suggestion.author_id) !== -1);
        if (currentUser.id === suggestion.author_id) {
          ownSuggestion = true;
        }
      } else {
        byFollowedUser = true;
      }

      return <SuggestionFeedItem key={suggestion.id} suggestion={suggestion} byFollowedUser={byFollowedUser} ownSuggestion={ownSuggestion} deleteSingleSuggestion={this.props.deleteSingleSuggestion} />
    })

    let followToggle;
    if (currentUser) {
      followToggle = (
        <span>
          <span>written by users I follow</span>
          <Toggle
            checked={this.state.onlyFollowedUsers}
            onClick={this.updateCheckbox('onlyFollowedUsers')}
          />
        </span>
      )
    } else {
      followToggle = null;
    }

    return (
			<section className="suggestion-feed">
        <h2>{this.props.feedTitle}</h2>
        <section className="suggestion-feed-filter-section">
          <form className="suggestion-feed-filter-form">
            <p>Only show suggestions ...      <span>marked as highlights</span></p>
              <Toggle
                checked={this.state.onlyHighlight}
                onClick={this.updateCheckbox('onlyHighlight')}
              />
            {followToggle}
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
				<ul className="suggestion-feed-items">
          {feed}
				</ul>
			</section>
    );
  }
}

export default SuggestionFeed;
