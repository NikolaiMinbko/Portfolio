import React from "react";
import img1 from "../images/social/facebook.svg"
import img2 from "../images/social/linkedin.svg"
import img3 from "../images/social/work.svg"

const Footer = () => (
  <div className="footer__social">
    <div className="footer__social-items">
      <a className="footer__social-item" >
        <img
          className="footer__social-image"
          src={img1}
          alt=""
        />
      </a>
      <a className="footer__social-item" >
        <img
          className="footer__social-image"
          src={img2}
          alt=""
        />
      </a>
      <a className="footer__social-item" >
        <img
          className="footer__social-image"
          src={img3}
          alt=""
        />
      </a>
    </div>
  </div>
);

export default Footer;
