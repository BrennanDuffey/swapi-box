import React, { Component } from 'react';
import './App.css';
import MyCrawlComponent from './Crawl/Crawl.js';
import CardContainer from './CardContainer/CardContainer.js';
import { fetchFilms, fetchPeople, fetchPlanets, fetchVehicles, fetchURL } from './apiCalls/apiCalls.js';

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
    .then(films => this.setState({ film: this.grabRandom(films.results)}));

    fetchPeople()
    .then(data => data.results)
    .then(people => this.getHomeworld(people))
    .then(peopleWithHomeworld => this.getSpecies(peopleWithHomeworld))
    .then(completePeople => this.setState({ people:completePeople }));

    fetchPlanets()
    .then(data => data.results)
    .then(planets => this.getPlanets(planets))
    .then(completePlanets => this.setState({planets: completePlanets}));

    fetchVehicles()
    .then(data => data.results)
    .then(vehicles => this.getVehicles(vehicles))
    .then(newVehicles => this.setState({vehicles: newVehicles}));
  };

  getVehicles(vehicles) {
    const newVehicles = vehicles.map(vehicle => ({
      name: vehicle.name,
      model: vehicle.model,
      vehicleClass: vehicle.vehicle_class,
      numOfPassengers: vehicle.passengers
    }));
    return newVehicles
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
  };

  getPlanets(planets) {
    const unresolvedPromises = planets.map(planet => {
      return this.getResidents(planet)
      .then(residents => (
        {
          name: planet.name,
          terrain: planet.terrain,
          population: planet.population,
          climate: planet.climate,
          residents: residents
        }
      ));
    });
    return Promise.all(unresolvedPromises)
  };

  getResidents(planet) {
    const unresolvedPromises = planet.residents
      .map(resident => (
        fetchURL(resident)
        .then(resident => (resident.name))
      ));
    return Promise.all(unresolvedPromises)
  }

  grabRandom(films) {
    return films[Math.floor(Math.random() * films.length)]
  };

  handleClick = (e) => {
    e.preventDefault();
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
        <header className="header"> 
          <button className="controls-buttons" name="people" onClick={this.handleClick}>People</button>
          <button className="controls-buttons" name="planets" onClick={this.handleClick}>Planets</button>
          <button className="controls-buttons" name="vehicles" onClick={this.handleClick}>Vehicles</button>
        </header>
        {display}
      </div>
    );
  };
};

export default App;
