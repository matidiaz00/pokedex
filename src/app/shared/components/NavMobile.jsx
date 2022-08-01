import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import CustomLink from './CustomLink';

const getIsChildrenPage = (location) => {
  const path = location.pathname.split("/");
  return path[2] ? true : false
}

function NavMobile() {

  const [isChildrenPage, setIsChildrenPage] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsChildrenPage(
      getIsChildrenPage(location)
    )
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
