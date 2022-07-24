import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './shared/components/header/Header';
import NavMobile from './shared/components/navMobile/NavMobile';

import Pokedex from './pages/pokedex/Pokedex';
import Battles from './pages/battles/Battles';
import Friends from './pages/friends/Friends';
import SSO from './pages/sso/SSO';

function App() {

  return (
    <div className="App">
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
  );
}

export default App;
