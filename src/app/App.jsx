import React, { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import { PokeContext } from "./PokedexContext";

import Header from './shared/components/Header';
import NavMobile from './shared/components/NavMobile';

import Pokedex from './pages/Pokedex';
import Battles from './pages/Battles';
import Friends from './pages/Friends';
import SSO from './pages/SSO';

function App() {

  const pokeContext = useContext(PokeContext);

  return (
    <div className="App">
      { pokeContext.load ? 'Loading Pokemons ...' : 
        <div className="wrapper">
          <Header></Header>
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/battles" element={<Battles />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/accounts" element={<SSO />} />
          </Routes>
          <NavMobile></NavMobile>
        </div>
      }
    </div>
  );
}

export default App;
