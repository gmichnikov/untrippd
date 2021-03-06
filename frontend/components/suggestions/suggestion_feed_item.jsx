import React from 'react';
import ReactEmoji from 'react-emoji';
import { Link } from 'react-router';
import TimeAgo from 'react-timeago';
import ReactTooltip from 'react-tooltip';
import PlaceMap from '../places/place_map';


class SuggestionFeedItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    let s = this.props.suggestion;
    let currentUser = this.props.currentUser;

    let deleteSuggestionButton = null;
    if (this.props.ownSuggestion) {
      deleteSuggestionButton = (
        <div className="suggestion-delete-button" data-tip={"Delete this suggestion"} onClick={() => this.props.deleteSingleSuggestion(s.id)}><i className="material-icons delete-forever">delete_forever</i></div>
      )
    }

    let foodIcon = s.food ? <i className="material-icons icon-dining">local_dining</i> : null;
    let attractionIcon = s.attraction ? <i className="material-icons icon-visibility">visibility</i> : null;
    let accommodationIcon = s.accommodation ? <i className="material-icons icon-hotel">hotel</i> : null;
    let highlightIcon = s.highlight ? <i className="material-icons icon-star">star</i> : null;
    let followedIcon = this.props.byFollowedUser ? <i className="material-icons icon-person-outline" data-tip={"By a user you follow"}>person_outline</i> : null;

    let suggestionImage = null;
    if (s.image_url && !s.image_url.startsWith("/assets/missing")) {
      suggestionImage = (
        <div className="suggestion-feed-photo-box">
          <img className="suggestion-feed-photo" src={s.image_url} />
        </div>
      )
    }

    let suggestionMap = null;
    let refName = `suggestion-map-${s.id}`;
    if (s.lat && s.lng) {
      suggestionMap = (
        <PlaceMap lat={s.lat} lng={s.lng} refName={refName} zoom={18}/>
      )
    }

    let notLoggedInButton = <div>
      <i className="material-icons icon-no-favorite">favorite</i>
    </div>

    let likeButton = <div onClick={() => this.props.likeSuggestion(s.id)}>
      <i className="material-icons icon-favorite">favorite_border</i>
    </div>

    let unlikeButton = <div onClick={() => this.props.unlikeSuggestion(s.id)}>
      <i className="material-icons icon-unfavorite">favorite</i>
    </div>

    let correctButton;
    if (currentUser === null || currentUser.id === s.author_id) {
      correctButton = notLoggedInButton;
    } else if (currentUser.liked_suggestion_ids.indexOf(s.id) === -1) {
      correctButton = likeButton;
    } else {
      correctButton = unlikeButton;
    }

    let likesPlural = (s.num_likers === 1 ? "like" : "likes");
    let numLikes = `${s.num_likers} ${likesPlural}`;

    return (
      <li className="suggestion-feed-item group">
        <div className="feed-user-profile-photo"><Link to="{s.user_link}"><img></img></Link></div>
        <div className="feed-middle">

          <div className="feed-item-title">
            <Link to={s.user_link}>{s.author_display_name}</Link>
            {" made a suggestion about "}
            <Link to={s.place_link}>{s.place_name}</Link>
          </div>
          <div className="feed-item-body">
            {ReactEmoji.emojify(s.body)}
          </div>
          <div className="suggestion-feed-photo-and-map">
            {suggestionImage}
            {suggestionMap}
          </div>
          <div className="feed-item-details">
            <TimeAgo date={s.created_at} live={false}/>

            {highlightIcon}
            {followedIcon}
            {foodIcon}
            {attractionIcon}
            {accommodationIcon}
          </div>
          <div className="feed-item-likes">
            {correctButton}
            <span className="num-likes">{numLikes}</span>
          </div>
        </div>
        <div className="feed-place-photo">
          {deleteSuggestionButton}
        </div>
        <ReactTooltip />
      </li>
    );
  }
}

export default SuggestionFeedItem;
