import React from 'react';
import ReactEmoji from 'react-emoji';

class SuggestionFeedItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    let s = this.props.suggestion;

    return (
      <li>{s.author_display_name} made a suggestion about {s.place_name}: {ReactEmoji.emojify(s.body)}</li>
    );
  }
}

export default SuggestionFeedItem;
