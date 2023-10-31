import React from 'react'

import MenuBars from '../Menu/MenuBars'
import Menu from '../Menu/Menu'
import img_logo from '../../assets/images/logo.svg'



const Header = () => {
  return (
    <header>
        <div className="container">
            <a href="index.html"><img src={img_logo} alt="crito logotype"/></a>
            
            <MenuBars />

            <Menu />

        </div>
    </header>
  )
}

export default Header