import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link, withRouter } from 'react-router';

// #  body             :text             not null
// #  food             :boolean          default(FALSE)
// #  attraction       :boolean          default(FALSE)
// #  accommodation    :boolean          default(FALSE)
// #  highlight        :boolean          default(FALSE)


class SuggestionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: "",
      food: false,
      attraction: false,
      accommodation: false,
      highlight: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const suggestion = Object.assign(this.state, {suggestable_type: this.props.placeType, suggestable_id: this.props.placeId});
    console.log("submit suggestion attempt", suggestion);
    this.props.processSuggestionForm({suggestion: suggestion});
    this.setState(Object.assign(
      {}, this.state, {body: ""}
    ));
  }

  updateBody() {
    return e => this.setState({body: e.target.value});
  }

  updateCheckbox(property) {
    return e => this.setState({[property]: e.target.checked});
  }


  render () {

    return (
      <section className="suggestion-form-section">
        <form className="suggestion-form" onSubmit={this.handleSubmit}>
          <textarea className="suggestion-body"
            value={this.state.body}
            placeholder="suggestion text ..."
            onChange={this.updateBody()}
          />
        <label>Food?</label>
          <input className="suggestion-form-checkbox"
            type="checkbox"
            checked={this.state.food}
            onClick={this.updateCheckbox('food')}
          />
        <label>Attraction?</label>
          <input className="suggestion-form-checkbox"
            type="checkbox"
            checked={this.state.attraction}
            onClick={this.updateCheckbox('attraction')}
          />
        <label>Accommodation?</label>
          <input className="suggestion-form-checkbox"
            type="checkbox"
            checked={this.state.accommodation}
            onClick={this.updateCheckbox('accommodation')}
          />
        <label>Highlight?</label>
          <input className="suggestion-form-checkbox"
            type="checkbox"
            checked={this.state.highlight}
            onClick={this.updateCheckbox('highlight')}
          />
          <button>Create Suggestion</button>
        </form>
      </section>
    );
  }


}

export default withRouter(SuggestionForm);
