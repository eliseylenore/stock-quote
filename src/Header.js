import React, { Component } from 'react';
import QuoteSearch from './QuoteSearch';

class Header extends Component {

    render () {
        return (
            <header>
                <h2>Stock Quote</h2>
                <QuoteSearch 
                    userInput = {this.props.userInput}
                    suggestions={[
                        "BA",
                        "GE",
                        "AMD",
                        "SFIX",
                        "GG",
                        "AAPL",
                        "SEEL",
                        "BAC",
                        "F",
                        "DKS", 
                        "SIRI"
                    ]}
                handleSubmit={this.props.handleSubmit}
                handleChange = {this.props.handleChange}
                onClick={this.props.onClick}
                onKeyDown={this.props.onKeyDown}
                activeSuggestion={this.props.activeSuggestion}
                filteredSuggestions={this.props.filteredSuggestions}
                showSuggestions={this.props.showSuggestions}
                />
            </header>
        )
    }
}

export default Header;