import React from 'react';
import Autosuggest from 'react-autosuggest';

// Imagine you have a list of languages that you'd like to autosuggest.
// const languages = [
//   {
//     name: 'C',
//     year: 1972
//   },
//   {
//     name: 'Clojure',
//     year: 1972
//   },
//   {
//     name: 'C#',
//     year: 1972
//   },
//   {
//     name: 'Elm',
//     year: 2012
//   }
// ];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value, searchPlaces) => {
  const inputValue = value.trim().toLowerCase();
  console.log("value1", inputValue.length);
  const inputLength = inputValue.length;

  return searchPlaces.map((section) => {
    return {
      title: section.title,
      places: section.places.filter(place =>
        place.name.toLowerCase().slice(0, inputLength) === inputValue
      ),
    }
  });


};

// When suggestion is clicked, Autosuggest needs to populate the input field
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
// (how they show up when you click one)
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions. (how they show up in the search list)
const renderSuggestion = suggestion => (
  <a href="http://www.cnn.com">
    {suggestion.name}
  </a>
);

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
      suggestions: []
    };
  }

  componentDidMount() {
    console.log("mounted");
    this.props.requestAllSearchPlaces();
  }

  render() {

    let searchPlaces = this.props.searchPlaces;
    if (!searchPlaces) return null;
    console.log("sp", searchPlaces);


    let onChange = (event, { newValue }) => {
      this.setState({
        value: newValue
      });
    };

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    let onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: getSuggestions(value, searchPlaces)
      });
    };

    // determines when to start showing results
    let shouldRenderSuggestions = function(value) {
      console.log("value2", value.trim().length);
      return value.trim().length > 1;
    }

    // Autosuggest will call this function every time you need to clear suggestions.
    let onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };

    let renderSectionTitle = function(section) {
      console.log("render section title", section);
      if (section.places.length === 0) return null;
      return (
        <strong>{section.title}</strong>
      );
    }

    let getSectionSuggestions = function(section) {
      console.log("get section suggestions", section);
      return section.places;
    }

    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input field.
    const inputProps = {
      placeholder: 'Type a programming language',
      value,
      onChange: onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        multiSection={true}
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        shouldRenderSuggestions={shouldRenderSuggestions}
        renderSuggestion={renderSuggestion}
        renderSectionTitle={renderSectionTitle}
        getSectionSuggestions={getSectionSuggestions}
        inputProps={inputProps}
      />
    );
  }
}

export default Search;