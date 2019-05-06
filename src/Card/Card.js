import React from 'react';
import './Card.css';


const Card = (props) => {

  let homeworld;
  let population;
  let species;
  let terrain;
  let climate;
  let residents;
  let model;
  let vehicleClass;
  let numOfPassengers;

  if (props.selected === "people") {
    homeworld = <p>Homeworld: {props.homeworld}</p>;
    population = <p>Population: {props.population}</p>;
    species = <p>Species: {props.species}</p>;
  } else if (props.selected === "vehicles") {
    model = <p>Model: {props.model}</p>;
    vehicleClass = <p>Class: {props.class}</p>
    numOfPassengers = <p>Number of Passengers:{props.numOfPassengers}</p>
  } else if (props.selected === "planets") {
    terrain = <p>Terrain: {props.terrain}</p>
    climate = <p>Climate: {props.climate}</p>
    population = <p>population: {props.population}</p>
    if (props.residents.length) {
      let lastResident = props.residents.pop();
      let residentString = props.residents.join(", ") + " and " + lastResident
      residents = <p>Residents: {residentString}</p>
    }
  }

  return (
    <article className="card">
      <button className="controls-buttons">Favorite</button>
      <h3>{props.name}</h3>
      {homeworld}
      {population}
      {species}
      {model}
      {vehicleClass}
      {numOfPassengers}
      {residents}
      {terrain}
      {climate}
    </article>
  );
};

export default Card