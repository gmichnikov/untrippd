import React from 'react';
import Autosuggest from 'react-autosuggest';
import { Link, withRouter } from 'react-router';


class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
  }

  getSuggestionValue(suggestion) {
    this.suggestion = suggestion;
    return suggestion.name;
  }

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

    let onSuggestionsFetchRequested = ({ value }) => {
      this.props.requestFilteredSearchPlaces(value);
    };

    let shouldRenderSuggestions = function(value) {
      return value.trim().length > 2;
    }

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
