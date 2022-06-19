import './Header.css'
import React from 'react'
import MenuBurger from '../../images/menu-bar.png'
import Logo from '../../images/logo.png'

function Header() {
  return (
    <div className='header'>
        <img src={MenuBurger} alt="" />
        <div className="header-logo">
            <img src={Logo} alt="logo" />
            <span>St<span>o</span>re</span>
        </div>
    </div>
  )
}

export default Header