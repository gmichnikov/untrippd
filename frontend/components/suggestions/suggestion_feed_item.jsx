import React from 'react';
import ReactEmoji from 'react-emoji';
import { Link } from 'react-router';

class SuggestionFeedItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    let s = this.props.suggestion;

    return (
      <li>{s.author_display_name} made a suggestion about <Link to={s.place_link}>{s.place_name}</Link>: {ReactEmoji.emojify(s.body)}</li>
    );
  }
}

export default SuggestionFeedItem;
