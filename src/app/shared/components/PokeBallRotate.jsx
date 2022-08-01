import React from 'react';
import ReactPokeBall from '../../assets/pokeball.svg';
import './PokeBallRotate.css'

function PokeBallRotate() {

  return (
    <img src={ReactPokeBall} width="200" className='mx-3 mw-100 rotating' alt="React Logo" />
  );
}

export default PokeBallRotate;
