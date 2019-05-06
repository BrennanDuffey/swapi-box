import React from 'react';
import Card from '../Card/Card.js';

const CardContainer = (props) => {
  
  const cards = props[props.selected].map(card => (<Card {...card}/>))
  return (
    <section>
      {cards}
    </section>
  )
}

export default CardContainer