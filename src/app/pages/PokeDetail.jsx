import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import { PokeContext } from '../PokedexContext';
import { pokeColors } from '../shared/providers/Api';
import Details from './components/pokedex/Details';

const getPokeId = (location) => {
  const path = location.pathname.split("/");
  const pokeId = path[2] ? path[2] : '0';
  return parseInt(pokeId)
}

const getPoke = (allPokes, pokeID) => {
  const poke = allPokes.find(x => x.id === pokeID);
  return poke
}

function PokeDetail() {
  
  const pokeContext = useContext(PokeContext);

  const [poke, setPoke] = useState(null);
  const [pokeColor, setPokeColor] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const poke = getPoke(pokeContext.pokes, getPokeId(location));
    setPokeColor(pokeColors[poke.types[0].type.name])
    setPoke(poke);
    // eslint-disable-next-line
  }, [location]);

  return (
    <div className="PokeDetail">
      <div className="container">
        <nav className='d-flex justify-content-between align-items-center py-3'>
          <Link to="/">
            <i className="bi bi-arrow-left h3 m-0"></i>
          </Link>
          <button type='button' onClick={() => null} className="btn btn-link">
            <i className="bi bi-heart h3 m-0"></i>
          </button>
        </nav>
        { poke && poke != null ? <Details data={poke} color={pokeColor} /> : null }
      </div>
    </div>
  );
}

export default PokeDetail;
