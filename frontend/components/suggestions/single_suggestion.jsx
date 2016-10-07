import React from 'react';

class SingleSuggestion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
		let suggestion = this.props.suggestion || {};
    console.log("suggestion", suggestion);

    return (
			<section className="single-suggestion">
				<ul>
					<li>body: {suggestion.body}</li>
					<li>author: {suggestion.author_display_name}</li>
				</ul>
			</section>
    );
  }
}

export default SingleSuggestion;
