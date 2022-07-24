import React from 'react';
import { Link } from "react-router-dom";

function NavMobile() {

  return (
    <div className="NavMobile w-100 d-lg-none position-fixed bottom-0">
        <nav className="nav nav-pills nav-fill bg-white border-top">
          <Link to="/pokedex" className="nav-link">Pokedex</Link>
          <Link to="/battles" className="nav-link">Battles</Link>
          <Link to="/friends" className="nav-link">Friends</Link>
          <Link to="/" className="nav-link">My Account</Link>
        </nav>
    </div>
  );
}

export default NavMobile;
