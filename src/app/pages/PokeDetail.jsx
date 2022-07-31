import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import { PokeContext } from '../PokedexContext';
import { pokeColors } from '../shared/providers/Api';
import Details from './components/pokedex/Details';

function PokeDetail() {

  const pokeContext = useContext(PokeContext);
  const location = useLocation();
  
  const [poke, setPoke] = useState(null);
  const [pokeColor, setPokeColor] = useState(null);

  const path = location.pathname.split("/");

  useEffect(() => {
    const pokeId = path[2] ? path[2] : '0';
    const filter = pokeContext.pokes.find(x => x.id === parseInt(pokeId));
    setPokeColor(pokeColors[filter.types[0].type.name])
    setPoke(filter);
  }, []);

  return (
    <div className="PokeDetail">
      <div className="container d-lg-none">
        <nav className='d-flex justify-content-between align-items-center py-3'>
          <Link to="/">
            <i className="bi bi-arrow-left h3 m-0"></i>
          </Link>
          <a onClick={() => null} className="">
            <i className="bi bi-heart h3 m-0"></i>
          </a>
        </nav>
      </div>
      { poke && poke != null ? <Details data={poke} color={pokeColor} /> : null }
    </div>
  );
}

export default PokeDetail;
