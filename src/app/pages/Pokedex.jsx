import React, { useState, useEffect, useCallback, useContext } from 'react';
import { pokeColors } from '../shared/providers/Api';
import { PokeContext } from '../PokedexContext';
import Item from './components/pokedex/Item';
import Filters from './components/pokedex/Filters';
import Details from './components/pokedex/Details';

/*
const removeDuplicates = (arr) => {
  return arr.reduce((acc, current) => {
      const x = acc.find(item => item.id === current.id);
      return !x ? acc.concat([current]) : acc;
  }, []);
}

const pokeFilter = (pokes, filters) => {
  pokes = pokes.filter((pokemon, index) => {
      let bool = true;
      if (filters.name !== '' && !pokemon.name.includes(filters.name)) bool = false;
      if (filters.ability !== '' && filters.ability !== 'Ability' && !pokemon.abilities.some(e => e.ability.name === filters.ability)) bool = false;
      if (filters.move !== '' && filters.move !== 'Move' && !pokemon.moves.some(e => e.move.name === filters.move)) bool = false;
      if (filters.type !== '' && filters.type !== 'Type' && !pokemon.types.some(e => e.type.name === filters.type)) bool = false;
      return bool
  });
  return removeDuplicates(pokes);
}
*/

function Pokedex() {

  const pokeContext = useContext(PokeContext);

  const [isFixed, setIsFixed] = useState(false);
  const [selectPoke, setSelectPoke] = useState(null);
  const [pokeFilters, setPokeFilters] = useState(null);

  const handleScroll = (e) => {
    const windowHeight = window.innerHeight;
    const scrollTop = e.target.documentElement.scrollTop;
    const scrollHeight = e.target.documentElement.scrollHeight;
    const headerHeight = document.getElementById('Header').clientHeight;
    const filtersHeight = document.getElementById('Filters').clientHeight;
    if (windowHeight + scrollTop + 1 >= scrollHeight) //getPokemons(filters);
    if (scrollTop + 1 >= headerHeight + filtersHeight) setIsFixed(true);
    else setIsFixed(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const getDetail = (id) => {
    pokeContext.pokes.filter(x => x.id === id).map(x => setSelectPoke(x))
  }

  const callback = useCallback((data) => {
    setPokeFilters({
      name: data.name,
      alphabet: data.alphabet,
      number: data.number,
      type: data.type,
      ability: data.ability,
      move: data.move
    })
    //getAllPokemons(pokeFilters);
  }, []);

  return (
    <div className="Pokedex">
      <div className='container'>
        <div className='d-none'>{pokeFilters}</div>
        <div className='row'>
          <div className='col-12 col-lg-8 position-relative'>
            <div
              id="Filters"
              className={`w-100 py-2 ${isFixed ? 'bg-white position-sticky top-0' : ''}`}
              style={{zIndex: 1}}
            >
              <Filters submit={callback} />
            </div>
              <div className='row m-n3'>
                {
                  pokeContext.pokes.map((data, i) => (
                    <div 
                      className='col-6 col-md-4 py-3'
                      id={data.id} key={data.id}
                      onClick={() => getDetail(data.id)}
                    >
                      <Item data={data} key={data.id} pokeColors={pokeColors}  />
                    </div>
                  ))
                }
            </div>
          </div>
          <div className='col-4 d-none d-lg-block'>
            <div
              className={ isFixed ? 'bg-white position-sticky top-0 pt-2' : '' }
              style={{zIndex: 1}}
            >
              { selectPoke ? 
                <Details
                  data={selectPoke}
                  color={pokeColors[selectPoke.types[0].type.name]}
                /> : 'Select a pokemon' }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokedex;