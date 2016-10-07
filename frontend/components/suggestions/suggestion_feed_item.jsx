import React from 'react';

class SuggestionFeedItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    let s = this.props.suggestion;

    return (
      <li>{s.author_display_name} made a suggestion about {s.place_name}: {s.body}</li>
    );
  }
}

export default SuggestionFeedItem;
