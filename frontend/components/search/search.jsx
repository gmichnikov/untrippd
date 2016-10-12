import React from 'react';
import Autosuggest from 'react-autosuggest';
import { Link, withRouter } from 'react-router';


class Search extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);

    // this.lastRequestId = null;
  }

  componentDidMount() {
  }


  // When suggestion is clicked, Autosuggest needs to populate the input field
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  // (how they show up when you click one)
  getSuggestionValue(suggestion) {
    this.suggestion = suggestion;
    return suggestion.name;
  }

  // Use your imagination to render suggestions. (how they show up in the search list)
  renderSuggestion(suggestion) {
    let linkAddress = `/${suggestion.place_type}/${suggestion.id}`;
    return (
      <Link className="search-result" to={linkAddress}>{suggestion.name}</Link>
    )
  };


  handleSubmit(e) {
    e.preventDefault();
    const suggestion = this.suggestion;
    if (!suggestion) return;
    const linkAddress = `/${suggestion.place_type}/${suggestion.id}`;
    this.props.router.push(linkAddress);
  }

  render() {
    let onChange = (event, { newValue }) => {
      this.setState({
        value: newValue
      });
    };

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    let onSuggestionsFetchRequested = ({ value }) => {
      this.props.requestFilteredSearchPlaces(value);
    };

    // determines when to start showing results
    let shouldRenderSuggestions = function(value) {
      return value.trim().length > 2;
    }

    // Autosuggest will call this function every time you need to clear suggestions.
    let onSuggestionsClearRequested = () => {
    };

    let renderSectionTitle = function(section) {
      if (section.places.length === 0) return null;
      return (
        <strong>{section.title}</strong>
      );
    }

    let getSectionSuggestions = function(section) {
      return section.places;
    }

    const value = this.state.value;
    let suggestions = this.props.searchPlaces;


    // Autosuggest will pass through all these props to the input field.
    const inputProps = {
      placeholder: 'Find a country, state, or city',
      value,
      onChange: onChange
    };

    return (
      <form className="header-search-form" onSubmit={this.handleSubmit}>
        <div>
          <Autosuggest
            multiSection={true}
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            shouldRenderSuggestions={shouldRenderSuggestions}
            renderSuggestion={this.renderSuggestion}
            renderSectionTitle={renderSectionTitle}
            getSectionSuggestions={getSectionSuggestions}
            inputProps={inputProps}
          />
      </div>
    </form>
    );
  }
}

export default withRouter(Search);
