import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import ReactLogo from '../../assets/logo.svg';
import CustomLink from './CustomLink';

const getIsChildrenPage = (location) => {
  const path = location.pathname.split("/");
  return path[2] ? true : false
}

const getTitle = (location) => {
  const path = location.pathname.split("/");
  return path[1] ? path[1] : 'Pokedex'
}

function Header() {

  const [isChildrenPage, setIsChildrenPage] = useState(false);
  const [title, setTitle] = useState('');

  const location = useLocation();

  useEffect(() => {

    setIsChildrenPage(
      getIsChildrenPage(location)
    )
    setTitle(
      getTitle(location)
    )
  }, [location]);

  return (
    <div id="Header" className="">
      <div className="container d-none d-lg-block">
        <nav className="nav py-3 nav-pills justify-content-between align-items-center">
          <CustomLink to="/pokedex" styles="nav-link" active="active">Pokedex</CustomLink>
          <CustomLink to="/battles" styles="nav-link" active="active">Battles</CustomLink>
          <img src={ReactLogo} width="200" className='mx-3' alt="React Logo" />
          <CustomLink to="/friends" styles="nav-link" active="active">Friends</CustomLink>
          <CustomLink to="/accounts" styles="nav-link" active="active">My Account</CustomLink>
        </nav>
      </div>
      <div className={`container ${isChildrenPage ? 'd-none' : 'd-lg-none'}`}>
        <h3 className='pt-3 text-capitalize'>{ title }</h3>
      </div>
    </div>
  );
}

export default Header;
