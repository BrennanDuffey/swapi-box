import React from 'react';
import './Card.css';


const Card = (props) => {

  let residents;
  if (props.selected === "planets") {
    if (props.residents.length) {
      let lastResident = props.residents.pop();
      let residentString = props.residents.join(", ") + ", and " + lastResident
      residents = <p>Residents: {residentString}</p>
    }
  }

  return (
    <article className="card">
      <h3>{props.name}</h3>
      {props.homeworld && <p>Homeworld: {props.homeworld}</p>}
      {props.population && <p>Population: {props.population}</p>}
      {props.species && <p>Species: {props.species}</p>}
      {props.model && <p>Model: {props.model}</p>}
      {props.class && <p>Class: {props.class}</p>}
      {props.numOfPassengers && <p>Number of Passengers:{props.numOfPassengers}</p>}
      {props.terrain && <p>Terrain: {props.terrain}</p>}
      {props.climate && <p>Climate: {props.climate}</p>}
      {residents}
      <button className="controls-buttons">Favorite</button>
    </article>
  );
};

export default Card