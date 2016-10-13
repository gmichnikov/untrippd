import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link, withRouter } from 'react-router';
import Modal from 'react-modal';

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
      imageFile: null,
      imageUrl: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("suggestion[body]", this.state.body);
    formData.append("suggestion[food]", this.state.food);
    formData.append("suggestion[attraction]", this.state.attraction);
    formData.append("suggestion[accommodation]", this.state.accommodation);
    formData.append("suggestion[highlight]", this.state.highlight);
    formData.append("suggestion[suggestable_type]", this.props.placeType);
    formData.append("suggestion[suggestable_id]", this.props.placeId);
    if (this.state.imageFile) {
      formData.append("suggestion[image]", this.state.imageFile);
    }

    // const suggestion = Object.assign(this.state, {suggestable_type: this.props.placeType, suggestable_id: this.props.placeId});
    // console.log("submit suggestion attempt", suggestion);
    this.props.processSuggestionForm(formData);
    this.setState(Object.assign(
      {}, this.state, {body: ""}
    ));
    this.props.closeModal();
  }

  updateBody() {
    return e => this.setState({body: e.target.value});
  }

  updateCheckbox(property) {
    return e => this.setState({[property]: e.target.checked});
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result})
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }



  render () {

    return (
      <section className="suggestion-form-section">
        <div className="suggestion-form-top-bar">
          <h3>Make a Suggestion</h3>
          <span onClick={this.props.closeModal}><i className="material-icons icon-close">close</i></span>
        </div>
        <form className="suggestion-form" onSubmit={this.handleSubmit}>
          <textarea className="suggestion-form-body"
            value={this.state.body}
            placeholder="suggestion text ..."
            onChange={this.updateBody()}
          />
          <div className="file-input-container">
            <div className="file-input-fake" onClick={() => document.getElementById('suggestion-form-file-input').click()}></div>
            <i className="material-icons icon-add-photo" onClick={() => document.getElementById('suggestion-form-file-input').click()}>add_a_photo</i>
              <input type="file" className="suggestion-form-file-input" id="suggestion-form-file-input" onChange={this.updateFile} />

          </div>



          <img src={this.state.imageUrl} />

          <br/>

        <span className="check-all-that-apply">Check all that apply: </span>
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
          <br/>
          <label>Was this a highlight of your trip?</label>
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
