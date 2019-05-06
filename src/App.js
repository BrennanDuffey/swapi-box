import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyCrawlComponent from './Crawl/Crawl.js';
import CardContainer from './CardContainer/CardContainer.js';
import { fetchFilms, fetchPeople, fetchURL } from './apiCalls/apiCalls.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      film: {},
      people: [],
      vehicles: [],
      planets: [],
      selected: ''
    };
  };

  componentDidMount() {
    fetchFilms()
    .then(films => this.setState({ film: this.grabRandom(films.results)}))

    fetchPeople()
    .then(data => data.results)
    .then(people => this.getHomeworld(people))
    .then(peopleWithHomeworld => this.getSpecies(peopleWithHomeworld))
    .then(completePeople => this.setState({ people:completePeople }))
  };

  getHomeworld(people) {
    const unresolvedPromises = people.map(person => {
      return fetchURL(person.homeworld)
      .then(homeworld => ({
        name: person.name, 
        homeworld: homeworld.name, 
        population: homeworld.population,
        species: person.species
      }))
    });
    return Promise.all(unresolvedPromises)
  };

  getSpecies(peopleWithHomeworld) {
    const unresolvedPromises = peopleWithHomeworld.map(person => (
      fetchURL(person.species)
      .then(species => ({...person, species: species.name}))
    ))
    return Promise.all(unresolvedPromises)
  }

  grabRandom(films) {
    return films[Math.floor(Math.random() * films.length)]
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.name)
    this.setState({ selected: e.target.name})
  }
  

  render() {
    let display
    if (!this.state.selected) {
      display = <MyCrawlComponent film={this.state.film}/>
    } else {
      display = <CardContainer {...this.state}/>
    }
    return (
      <div className="App">
        <aside className="side-bar"> 
          <button name="people" onClick={this.handleClick}>People</button>
          <button name="planets" onClick={this.handleClick}>Planets</button>
          <button name="vehicles" onClick={this.handleClick}>Vehicles</button>
        </aside>
        {display}
      </div>
    );
  };
};

export default App;
