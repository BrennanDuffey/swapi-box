import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Film from './Film/Film.js';
import { fetchFilms } from './apiCalls/apiCalls.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: []
    };
  };

  componentDidMount() {
    return fetchFilms()
    .then(response => this.setState({ films: response.results}))
  };
  
  render() {
    return (
      <div className="App">
        <Film />
      </div>
    );
  };
};

export default App;
