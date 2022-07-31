import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import CustomLink from './CustomLink';

function NavMobile() {

  const location = useLocation();
  const path = location.pathname.split("/");

  const [isChildrenPage, setIsChildrenPage] = useState(false);

  useEffect(() => {
    setIsChildrenPage(path[2] ? true : false)
  }, [location]);

  return (
    <div
      className={
        `NavMobile w-100 position-fixed bottom-0 ${isChildrenPage ? 'd-none' : 'd-lg-none'}` 
      }
      style={{zIndex: 1}}
      >
        <nav className="nav nav-pills nav-fill bg-white border-top">
          <CustomLink to="/pokedex" styles="nav-link" active="active">Pokedex</CustomLink>
          <CustomLink to="/battles" styles="nav-link" active="active">Battles</CustomLink>
          <CustomLink to="/friends" styles="nav-link" active="active">Friends</CustomLink>
          <CustomLink to="/accounts" styles="nav-link" active="active">My Account</CustomLink>
        </nav>
    </div>
  );
}

export default NavMobile;
