import React, { Component } from 'react';
import './App.css';
import Header from  './Header';
import Results from  './Results';
import stocks from './stocks.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResults: false, 
      searchedStock: '', 
      isLoaded: false,
      userInput: '',
      activeSuggestion: '',
      filteredSuggestions: '',
      showSuggestions: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    this.setState((state) => {
      return { showResults: true, searchedStock: state.userInput };
    });

    event.preventDefault();
  }



  // Event fired when the user clicks on a suggestion
  onClick = e => {
    // Update the user input and reset the rest of the state
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  // Event fired when the user presses a key down
  onKeyDown = e => {
    console.log("Keydown!")
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  // event fired when the user entes input
  handleChange(event) {

    const userInput = event.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = stocks.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    ).slice(0, 5);

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: event.currentTarget.value
    });
  }


  render() {
    return (
      <div className="App">
        <Header 
        handleChange={this.handleChange} 
        handleSubmit={this.handleSubmit} 
        onClick={this.onClick} 
        onKeyDown={this.onKeyDown}
        userInput={this.state.userInput}
        activeSuggestion={this.state.activeSuggestion}
        filteredSuggestions={this.state.filteredSuggestions}
        showSuggestions={this.state.showSuggestions}/>
        {this.state.showResults && <Results searchedStock={this.state.searchedStock} quote={this.state.quote} />}
      </div>
    );
  }
}

export default App;
