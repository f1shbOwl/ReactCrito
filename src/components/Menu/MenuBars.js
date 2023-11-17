import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';



const MenuBars = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };




  return (
    <div>
      <button className="menu-bars" type="button" onClick={toggleMenu}>{openMenu ? <i className="fa-solid fa-times"></i> : <i className="fa-solid fa-bars"></i>}</button>
      <div className={`menu-links ${openMenu ? 'open' : ''}`}>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Services">Services</NavLink></li>
            <li><NavLink to="/News">News</NavLink></li>
            <li><NavLink to="/Contacts">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuBars;