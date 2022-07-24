import React, { useState, useEffect } from 'react';
import Item from './../../shared/components/item/Item';
import Filters from './../../shared/components/filters/Filters';
import Details from './../../shared/components/details/Details';

function Pokedex() {

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

  useEffect(() => {
    const filters = {type: [], ability: [], move: []};
    const arrPokes = [];
    const API_URL = 'https://pokeapi.co/api/v2';

    const getSpecificPokemon = async (url) => {
      const response_1 = await fetch(url);
      const allpokemon = await response_1.json();
      arrPokes.push(allpokemon);
      return setPoke(arrPokes);
    }

    const getPokemons = async () => {
      const response = await fetch(API_URL + '/pokemon/?limit=50');
      const data = await response.json();
      for (let i = 0; i < data.results.length; i++) {
        getSpecificPokemon(data.results[i].url);
      }
    };

    const getPokemonsMove = async () => {
      const response = await fetch(API_URL + '/move');
      const data = await response.json();
      for (let i = 0; i < data.results.length; i++) {
        filters.move.push(data.results[i].name);
      }
    };

    const getPokemonsAbility = async () => {
      const response = await fetch(API_URL + '/ability');
      const data = await response.json();
      for (let i = 0; i < data.results.length; i++) {
        filters.ability.push(data.results[i].name);
      }
    };

    const getPokemonsTypes = async () => {
      const response = await fetch(API_URL + '/type');
      const data = await response.json();
      for (let i = 0; i < data.results.length; i++) {
        filters.type.push(data.results[i].name);
      }
    };

    getPokemonsTypes()
    getPokemonsAbility()
    getPokemonsMove()
    setFilter(filters)
    getPokemons();
  }, []);

  const getDetail = (id) => {
    poke.filter(x => x.id === id).map(x => {
      setSelectPoke(x)
    })
  }

  return (
    <div className="Pokedex">
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-8'>
            <Filters filters={filters} key={Math.random()} />
            <div className='row m-n3'>
              {poke.map((data, i) => (
                <div 
                  className='col-6 col-md-4 py-3'
                  id={data.id} key={data.id}
                  onClick={() => getDetail(data.id)}
                >
                  <Item data={data} key={data.id} />
                </div>
              ))}
            </div>
          </div>
          <div className='col-4 d-none d-lg-block'>
            {
              selectPoke ? <Details data={selectPoke} key={selectPoke.id} /> : 'Select a pokemon'
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokedex;