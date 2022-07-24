import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Item from './../../shared/components/item/Item';
import Filters from './../../shared/components/filters/Filters';
import Details from './../../shared/components/details/Details';

function Pokedex() {

  let offset = 0;

  const [isFixed, setIsFixed] = useState(false);
  const [selectPoke, setSelectPoke] = useState(null);
  const [poke, setPoke] = useState([]);
  const [filters, setFilter] = useState({
    name:null,
    alphabet:0,
    number:1,
    type: [],
    ability: [],
    move: []
  });
  
  const API_URL = 'https://pokeapi.co/api/v2';

  const getSpecificPokemon = async (url) => {
    const arrPokes = [];
    const response_1 = await fetch(url);
    const allpokemon = await response_1.json();
    arrPokes.push(allpokemon);
    return setPoke((oldPokes) => [...oldPokes, ...arrPokes]);
  }

  const getPokemons = async () => {
    const response = await fetch(`${API_URL}/pokemon/?limit=10&offset=${offset}`);
    const data = await response.json();
    for (let i = 0; i < data.results.length; i++) {
      getSpecificPokemon(data.results[i].url);
    }
    offset += 10;
  };

  const setFilters = () => {
    const typeREQ = axios.get(`${API_URL}/type`);
    const abilityREQ = axios.get(`${API_URL}/ability`);
    const moveREQ = axios.get(`${API_URL}/move`);

    axios.all([typeREQ, abilityREQ, moveREQ])
      .then(axios.spread((...responses) => {
        setFilter({ 
          ...filters,
          type: responses[0].data.results,
          ability: responses[1].data.results,
          move: responses[2].data.results
        })
      }));
  }

  const handleScroll = (e) => {
    const windowHeight = window.innerHeight;
    const scrollTop = e.target.documentElement.scrollTop;
    const scrollHeight = e.target.documentElement.scrollHeight;
    const headerHeight = document.getElementById('Header').clientHeight;
    const filtersHeight = document.getElementById('Filters').clientHeight;
    if (windowHeight + scrollTop + 1 >= scrollHeight) getPokemons();
    if (scrollTop + 1 >= headerHeight + filtersHeight) setIsFixed(true);
    else setIsFixed(false);

  }

  useEffect(() => {
    setFilters();
    getPokemons();
    window.addEventListener("scroll", handleScroll);
  }, []);

  const getDetail = (id) => {
    poke.filter(x => x.id === id).map(x => {
      setSelectPoke(x)
    })
  }

  const callback = useCallback((data) => {
    console.log(data)
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
                options={filters}
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
                    <Item data={data} key={i} />
                  </div>
                ))}
            </div>
          </div>
          <div className='col-4 d-none d-lg-block'>
            <div
              className={ isFixed ? 'bg-white position-sticky top-0 pt-2' : '' }
              style={{zIndex: 1}}
            >
              { selectPoke ? <Details data={selectPoke} /> : 'Select a pokemon' }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokedex;