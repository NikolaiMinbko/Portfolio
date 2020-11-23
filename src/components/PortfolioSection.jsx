import React from "react";
import { NavLink } from "react-router-dom";



const PortfolioSection = ({ image, title, subtitle, text, index }) => {
  return(
    <div className="portfolio__inner">
      <div className="portfolio__image-wrap">
        <img className="portfolio__image" src={image} alt="" />
      </div>
      <div className="portfolio__info">
        <div className="portfolio__info-container">
          <h4 className="portfolio__subtitle">{subtitle}</h4>
          <h2 className="portfolio__title">{title}</h2>
          <p className="portfolio__text">{text}</p>
          <NavLink to={`/portfolios/${index}`} className="portfolio__btn">
            view project
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
