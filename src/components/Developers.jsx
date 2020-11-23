import React from "react";
import img from "../images/avatars/avatar.jpg"

const Developers = ({ name, post, info }) => {
  return (
    
      <div className="about__list-item">
        <img className="about__item-img" src={img} alt="" />
        <div className="about__item-desc">
          <p className="about__item-title">{name}</p>
          <p className="about__item-subtitle">{post}</p>
          <p className="about__item-text">{info}</p>
        </div>
      </div>
    
  );
};

export default Developers;
