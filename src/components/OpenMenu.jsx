import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import img1 from "../images/social/facebook.svg";
import img2 from "../images/social/linkedin.svg";
import img3 from "../images/social/work.svg";

const OpenMenu = ({ close, handleOutsideClick, menuRef, linkRef }) => {
  const portfolios = useSelector(({ portfolios }) => portfolios.portfoliosList);

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    console.log(linkRef.current);
  }, []);

  return (
    <div ref={menuRef} className="open-menu">
      <div className="open-menu__close-btn" onClick={close}>
        <span></span>
        <span></span>
      </div>
      <div className="open-menu__nav">
        <div className="open-menu__nav-back">
          <p className="open-menu__nav-title">Go back to</p>
          <NavLink
            onClick={close}
            ref={linkRef}
            to="/"
            className="open-menu__nav-link"
          >
            Home
          </NavLink>
        </div>
        <div className="open-menu__nav-portfolios">
          <p className="open-menu__nav-title">Projects</p>
          {portfolios.map((item, index) => (
            <NavLink
              onClick={close}
              key={index + item}
              to={`${item.title}`}
              className="open-menu__nav-link"
            >
              {item.title}
            </NavLink>
          ))}
        </div>
        <div className="open-menu__nav-about">
          <p className="open-menu__nav-title">Who develop this?</p>
          <NavLink
            onClick={close}
            to={"/about"}
            className="open-menu__nav-link"
          >
            About us
          </NavLink>
          <NavLink onClick={close} to={"/about"} className="open-menu__nav-link">
            Write to us
          </NavLink>
        </div>
      </div>
      <div className="open-menu__social">
        <a className="open-menu__social-link" href="#">
          <img className="open-menu__social-img" src={img1} alt="" />
        </a>
        <a className="open-menu__social-link" href="#">
          <img className="open-menu__social-img" src={img2} alt="" />
        </a>
        <a className="open-menu__social-link" href="#">
          <img className="open-menu__social-img" src={img3} alt="" />
        </a>
      </div>
    </div>
  );
};

export default OpenMenu;
