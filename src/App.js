import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyCrawlComponent from './Crawl/Crawl.js';
import { fetchFilms, fetchPeople, fetchURL } from './apiCalls/apiCalls.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      film: {}
    };
  };

  componentDidMount() {
    fetchFilms()
    .then(films => this.setState({ film: this.grabRandom(films.results)}))

    fetchPeople()
    .then(data => data.results)
    .then(people => this.getHomeworld(people))
    .then(peopleWithHomeworld => this.getSpecies())
  };

  getHomeworld(people) {
    const unresolvedPromises = people.map(person => {
      return fetchURL(person.homeworld)
      .then(homeworld => ({name: person.name, homeworld: homeworld.name, population: homeworld.population }))
    });
    console.log(unresolvedPromises)
    return Promise.all(unresolvedPromises)
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
