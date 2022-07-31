import React, { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import { PokeContext } from "./PokedexContext";

import Header from './shared/components/Header';
import NavMobile from './shared/components/NavMobile';

import Pokedex from './pages/Pokedex';
import PokeDetail from './pages/PokeDetail';
import Battles from './pages/Battles';
import Friends from './pages/Friends';
import SSO from './pages/SSO';

function App() {

  const pokeContext = useContext(PokeContext);

  return (
    <div className="App h-100">
      { pokeContext.load
        ?
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="d-flex flex-column align-items-center">
            <div className="spinner-border">
              <span className="visually-hidden">Loading pokemons...</span>
            </div>
            <span className="text-center w-100 mt-3">Loading pokemons ...</span>
          </div>
        </div>
       : 
        <div className="wrapper">
          <Header></Header>
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:id" element={<PokeDetail />} />
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
