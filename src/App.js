import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyCrawlComponent from './Crawl/Crawl.js';
import { fetchFilms } from './apiCalls/apiCalls.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      film: {}
    };
  };

  componentDidMount() {
    return fetchFilms()
    .then(response => this.setState({ film: this.grabRandom(response.results)}))
  };

  grabRandom(films) {
    return films[Math.floor(Math.random() * films.length)]
  };
  

  render() {
    return (
      <div className="App">
        <MyCrawlComponent film={this.state.film}/>
      </div>
    );
  };
};

export default App;
