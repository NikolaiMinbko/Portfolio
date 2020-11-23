import React from "react";
import { NavLink } from "react-router-dom";


const Navigation = ({ open }) => {
  return  (

    <div className="header__inner">
        <div className="header__burger" onClick={open}>
          <div className="header__burger-wrap" >
            <span className="header__burger-line"></span>
            <span className="header__burger-line"></span>
            <span className="header__burger-line"></span>
          </div>
        </div>
        <div className="header__logo-text">Developer group</div>
        <NavLink to="/about" className="header__btn">
          ABOUT US
        </NavLink>
      </div>
  )
};

export default Navigation;
