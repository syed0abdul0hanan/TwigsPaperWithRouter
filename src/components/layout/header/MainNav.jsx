import React from "react";
import Logo from "../../../assets/twigs-paper.webp";
import MainNavStyle from "./MainNavStyle.module.css";
import UserIcon from "../../../assets/user-icon.png";
import SearchIcon from "../../../assets/search-icon.png";
import BuyCart from "../../../assets/buy-cart.png";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <div className={MainNavStyle.MainNavContainer}>
      <div className={MainNavStyle.LogoDiv}>
        <Link to="/">
          <img className={MainNavStyle.Logo} src={Logo} alt="" />
        </Link>
      </div>

      <ul className={MainNavStyle.NavLinks}>
       <Link to="/"> <li>Greeting Cards</li></Link>
       <Link to="/"> <li>Assorted Card Sets</li></Link>
       <Link to="/"> <li>Notebooks</li></Link>
       <Link to="/"> <li>About</li></Link>
      </ul>

      <div className={MainNavStyle.NavIcons}>
      <Link to="/login"> <img src={UserIcon} alt="" /></Link>
      <Link to="/"> <img src={SearchIcon} alt="" /></Link>
      <Link to="/"> <img src={BuyCart} alt="" /></Link>
      </div>
    </div>
  );
}

export default MainNav;
