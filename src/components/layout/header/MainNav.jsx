import React from "react";
import Logo from '../../../assets/twigs-paper.webp'
import MainNavStyle from './MainNavStyle.module.css'
import UserIcon from '../../../assets/user-icon.png'
import SearchIcon from '../../../assets/search-icon.png'
import BuyCart from '../../../assets/buy-cart.png'
import { Routes,Route,Link } from "react-router-dom";

function MainNav() {

  return (
  
    <div className={MainNavStyle.MainNavContainer}>

      <div className={MainNavStyle.LogoDiv}>
        <img className={MainNavStyle.Logo} src={Logo} alt="" />
      </div>


      <ul className={MainNavStyle.NavLinks}>
        <li>Greeting Cards</li>
        <li>Assorted Card Sets</li>
        <li>Notebooks</li>
        <li>About</li>
      </ul>


      <div className={MainNavStyle.NavIcons}>
        <img src={UserIcon} alt="" />
        <img src={SearchIcon} alt="" />
        <img src={BuyCart} alt="" />
      </div>

    </div>
  )
}

export default MainNav;
