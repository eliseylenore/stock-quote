import React, { Component } from 'react';
import './App.css';
import Header from  './Header';
import Results from  './Results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '', 
      showResults: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    console.log(event.target)
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    this.setState({ showResults: true })
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <Header value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Results value={this.state.value} showResults={this.state.showResults}/>
      </div>
    );
  }
}

export default App;
