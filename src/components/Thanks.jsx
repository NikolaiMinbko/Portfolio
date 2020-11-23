import React from "react";
import img from "../images/like.svg"

const Thanks = () => (
  <div className="thanks__inner">
    <div className="thanks__img">
      <img src={img} alt=""></img>
    </div>
    <h2 className="thanks__title">Thanks for watching!</h2>
    <div className="thanks__text">
      here you can know more
      <a href="#">about US</a>
    </div>
  </div>
);

export default Thanks;
