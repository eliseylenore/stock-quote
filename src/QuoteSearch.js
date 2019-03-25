import React, { Component } from 'react';
import PropTypes from "prop-types";


class QuoteSearch extends Component {
    // autocomplete feature pulled from https://alligator.io/react/react-autocomplete/
    static propTypes = {
        suggestions: PropTypes.instanceOf(Array)
    };

    static defaultProps = {
        suggestions: []
    };

    render () {
        const {
        handleChange,
        handleSubmit,
        onClick,
        onKeyDown,
        userInput,
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        } = this.props;

        let suggestionsListComponent;

        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul className="suggestions">
                       {filteredSuggestions.map((suggestion, index) => {
                            let className;

                            // Flag the active suggestion with a class
                            if (index === activeSuggestion) {
                                className = "suggestion-active";
                            }

                            return (
                                <li
                                    className={className}
                                    key={suggestion}
                                    onClick={onClick}
                                >
                                    {suggestion}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                suggestionsListComponent = (
                    <div class="no-suggestions">
                        <em>No suggestions, you're on your own!</em>
                    </div>
                );
            }
        }

        return (
            <div className="quote-search">
                <form onSubmit={handleSubmit}>
                    <input
                        name="userInput"
                        value={userInput}
                        onKeyDown={onKeyDown}
                        onChange={handleChange}
                        onClick={onClick}
                        autoComplete="off"
                    />
                    <button type="submit">
                        <img src="./img/search.png" alt="search icon"/>
                    </button>
                    <div className="suggestions-container">
                        {suggestionsListComponent}
                    </div>
                </form>
            </div>
        )
    }
}

export default QuoteSearch