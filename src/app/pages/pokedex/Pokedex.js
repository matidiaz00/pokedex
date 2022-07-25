import React, { useState, useEffect, useCallback } from 'react';
import { PokeColors } from './Colors';
import Item from './../../shared/components/item/Item';
import Filters from './../../shared/components/filters/Filters';
import Details from './../../shared/components/details/Details';
import * as API from './../../shared/providers/Api';
import { pokeFilter } from './Filters';

function Pokedex() {

  let offset = 0;

  const [isFixed, setIsFixed] = useState(false);
  const [selectPoke, setSelectPoke] = useState(null);
  const [poke, setPoke] = useState([]);
  const [filters, setFilters] = useState({ name: '', alphabet: true, number: false, type: '', ability: '', move: '' });
  const [filtersData, setFiltersData] = useState({ name: [], type: [], ability: [], move: [] });

  const getPokemons = (pokeFilters) => {
    API.getAllPokemons(offset)
      .then((pokemons) => {
        setPoke((oldPokes) => {
          let pokes = [];
          pokes = [...oldPokes, ...pokemons];
          pokes = pokeFilter(pokes, pokeFilters);
          return pokes
        });
      });
    offset += 10;
  };

  const setPokeFilters = () => {
    API.getPokeData()
      .then((data) => {
        setFiltersData({
          name: data[0],
          type: data[1],
          ability: data[2],
          move: data[3]
        })
      });
  }

  const handleScroll = (e) => {
    const windowHeight = window.innerHeight;
    const scrollTop = e.target.documentElement.scrollTop;
    const scrollHeight = e.target.documentElement.scrollHeight;
    const headerHeight = document.getElementById('Header').clientHeight;
    const filtersHeight = document.getElementById('Filters').clientHeight;
    if (windowHeight + scrollTop + 1 >= scrollHeight) getPokemons(filters);
    if (scrollTop + 1 >= headerHeight + filtersHeight) setIsFixed(true);
    else setIsFixed(false);
  }

  useEffect(() => {
    setPokeFilters();
    getPokemons(filters);
    window.addEventListener("scroll", handleScroll);
  }, [filters, offset]);

  const getDetail = (id) => {
    poke.filter(x => x.id === id).map(x => setSelectPoke(x))
  }

  const callback = useCallback((data) => {
    offset = 0;
    setFilters({
      name: data.name,
      alphabet: data.alphabet,
      number: data.number,
      type: data.type,
      ability: data.ability,
      move: data.move
    })
    getPokemons(filters);
  }, []);

  return (
    <div className="Pokedex">
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-8 position-relative'>
            <div
              id="Filters"
              className={isFixed ? 'bg-white position-sticky top-0 w-100 py-2' : ''}
              style={{zIndex: 1}}
            >
              <Filters
                options={filtersData}
                submit={callback}
              />
            </div>
              <div className='row m-n3'>
                {poke.map((data, i) => (
                  <div 
                    className='col-6 col-md-4 py-3'
                    id={data.id} key={i}
                    onClick={() => getDetail(data.id)}
                  >
                    <Item data={data} key={i} pokeColors={PokeColors}  />
                  </div>
                ))}
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
                  color={PokeColors[selectPoke.types[0].type.name]}
                /> : 'Select a pokemon' }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokedex;