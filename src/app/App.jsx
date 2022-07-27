import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './shared/components/Header';
import NavMobile from './shared/components/NavMobile';

import Pokedex from './pages/Pokedex';
//import Battles from './pages/Battles';
//import Friends from './pages/Friends';
import SSO from './pages/SSO';

import { PokedexContextProvider } from './PokedexContext';

function App() {

  return (
    <div className="App">
      <PokedexContextProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/accounts" element={<SSO />} />
        </Routes>
        <NavMobile></NavMobile>
      </PokedexContextProvider>
    </div>
  );
}

export default App;
