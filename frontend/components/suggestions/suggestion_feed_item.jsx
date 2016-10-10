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

    let foodIcon = s.food ? <i className="material-icons icon-dining">local_dining</i> : null;


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
            <TimeAgo date={s.created_at} live={false}/>
            <Link to="">View Suggestion Details</Link>
            {foodIcon}
            {foodIcon}
          </div>
        </div>
        <div className="feed-place-photo"><Link to=""><img></img></Link></div>
      </li>
    );
  }
}

export default SuggestionFeedItem;
