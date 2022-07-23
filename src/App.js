import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [poke, setPoke] = useState([]);
  const [load, setLoad] = useState('true');

  useEffect(() => {
    const arr = [];
    const API_URL = 'https://pokeapi.co/api/v2';

    const getSpecificPokemon = async (url) => {
      const response_1 = await fetch(url);
      const allpokemon = await response_1.json();
      arr.push(allpokemon);
      return setPoke(arr);
    }

    const getPokemons = async () => {
      const response = await fetch(API_URL + '/pokemon/?limit=50');
      const data = await response.json();
      for (let i = 0; i < data.results.length; i++) {
        getSpecificPokemon(data.results[i].url);
      }
    };

    getPokemons();
  }, []);

  setTimeout(() => {
    setLoad(false);
  }, 1000);

  return (
    <div className="App">
      <div className='container py-5'>
        <div className='row m-n3'>
          { load ? (
            <p>Loading...</p>
          ) : (
            poke.map((img, i) => (
              <div className='col-4 py-3' id={img.id} key={img.id}>
                <div className='card'>
                  <div className="card-body">
                    <img src={img.sprites.front_default} alt='pokemon' />
                    <h5 className='card-title text-capitalize'>{img.name}</h5>
                    <span className='card-subtitle mb-2 text-muted'>#{i}</span>
                    <div className='card-text'>
                      <h6 className='badge text-bg-primary text-capitalize'>{img.types[0].type.name}</h6>
                    </div>
                    <a href="https://www.google.com" className="card-link">Ver más</a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
