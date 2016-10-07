import React from 'react';
import SuggestionFeedItem from './suggestion_feed_item';

class SuggestionFeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {

    console.log("sugg", this.props.suggestions);

    // if (!this.props.suggestions) {
    //   return null;
    // }

    return (
			<section className="single-city-suggestion-feed">
				<ul>
          {this.props.suggestions && this.props.suggestions.map((suggestion, i) => {
            return <SuggestionFeedItem key={suggestion.id} suggestion={suggestion} />
          })}
				</ul>
			</section>
    );
  }
}

export default SuggestionFeed;
