import React from 'react';
import ReactEmoji from 'react-emoji';
import { Link } from 'react-router';
import TimeAgo from 'react-timeago';

class SuggestionFeedItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    let s = this.props.suggestion;

    return (
      <li className="suggestion-feed-item group">
        <div className="feed-user-profile-photo"><Link to=""><img></img></Link></div>
        <div className="feed-middle">
          <div className="feed-item-title">
            <Link to={s.user_link}>{s.author_display_name}</Link>
            {" made a suggestion about "}
            <Link to={s.place_link}>{s.place_name}</Link>
          </div>
          <div className="feed-item-body">
            {ReactEmoji.emojify(s.body)}
          </div>
          <div className="feed-item-details">
            <TimeAgo date={s.created_at} /><Link to="">View Suggestion Details</Link>
          </div>
        </div>
        <div className="feed-place-photo"><Link to=""><img></img></Link></div>
      </li>
    );
  }
}

export default SuggestionFeedItem;
