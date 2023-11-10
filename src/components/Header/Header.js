import React from 'react'
import { NavLink } from 'react-router-dom'

import MenuBars from '../Menu/MenuBars'
import Menu from '../Menu/Menu'
import img_logo from '../../assets/images/logo.svg'


const Header = () => {
  return (
    <header>
        <div className="container">
            <NavLink to="/"><img src={img_logo} alt="crito logotype"/></NavLink>
            <MenuBars />
            <Menu />
        </div>
    </header>
  )
}

export default Header