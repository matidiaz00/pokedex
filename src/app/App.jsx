import React, { useContext, useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { PokeContext } from "./PokedexContext";

import Header from './shared/components/Header';
import NavMobile from './shared/components/NavMobile';
import PokeBall from './shared/components/PokeBall';
import RouterAnimation from './shared/components/RouterAnimation';

import Pokedex from './pages/Pokedex';
import PokeDetail from './pages/PokeDetail';
import Battles from './pages/Battles';
import Friends from './pages/Friends';
import SSO from './pages/SSO';

function App() {

  const pokeContext = useContext(PokeContext);

  const [load, setLoad] = useState(pokeContext.load);

  useEffect(() => {
    if (pokeContext.load == false) {
      setTimeout(() => {
        setLoad(pokeContext.load)
      }, 1000)
    }    
  }, [pokeContext.load]);

  return (
    <div className="App h-100">
      { load
        ?
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="d-flex flex-column align-items-center">
              <PokeBall />
            </div>
          </div>
       : 
        <div className="wrapper">
          <Header></Header>
          <Routes>
            <Route element={<RouterAnimation />}>
              <Route path="/" element={<Pokedex />} />
              <Route path="/pokedex" element={<Pokedex />} />
              <Route path="/pokedex/:id" element={<PokeDetail />} />
              <Route path="/battles" element={<Battles />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/accounts" element={<SSO />} />
            </Route>
          </Routes>
          <NavMobile></NavMobile>
        </div>
      }
    </div>
  );
}

export default App;
