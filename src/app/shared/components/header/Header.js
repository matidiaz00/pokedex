import React from 'react';
import { Link } from "react-router-dom";
import ReactLogo from './logo.svg';

function Header() {

  return (
    <div id="Header" className="d-none d-lg-block">
      <div className="container">
        <nav className="nav py-3 nav-pills justify-content-between align-items-center">
          <Link to="/pokedex" className="nav-link">Pokedex</Link>
          <Link to="/battles" className="nav-link">Battles</Link>
          <img src={ReactLogo} width="200" className='mx-3' alt="React Logo" />
          <Link to="/friends" className="nav-link">Friends</Link>
          <Link to="/" className="nav-link">My Account</Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
