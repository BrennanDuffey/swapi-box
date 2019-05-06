import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css';


const CardContainer = (props) => {
  
  const cards = props[props.selected].map(card => (<Card {...card} selected={props.selected} key={card.name}/>))
  return (
    <section className="card-container">
      {cards}
    </section>
  )
}

export default CardContainer