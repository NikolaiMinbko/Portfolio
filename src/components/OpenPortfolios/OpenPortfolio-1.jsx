import React  from "react";



import img1 from "../../images/examples/example-1.jpg"
import img2 from "../../images/examples/example-2.jpg"
import img3 from "../../images/examples/example-3.jpg"

import Thanks from "../Thanks"


const OpenPortfolio = () => {

 
  return (
    <>
    <section className="open-portfolio ">
      <div className="open-portfolio__inner">
        <div className="open-portfolio__title-wrap">
          <p className="open-portfolio__subtitle"></p>
          <h2 className="open-portfolio__title"></h2>
          <p className="open-portfolio__date">data: January 2020</p>
        </div>
        <div className="open-portfolio__info-wrap">
          <div className="open-portfolio__info-title">Introduction</div>
          <div className="open-portfolio__info-text">
            Varius quam quisque id diam. Velit aliquet sagittis id consectetur
            purus ut faucibus pulvinar. Interdum velit euismod in pellentesque
            massa placerat. Volutpat commodo sed egestas egestas fringilla
            phasellus faucibus. Vel quam elementum pulvinar etiam. Iaculis eu
            non diam phasellus vestibulum lorem. Ultricies lacus sed turpis
            tincidunt id. In nisl nisi scelerisque eu ultrices. Faucibus purus
            in massa tempor nec. Urna molestie at elementum eu facilisis sed
            odio.
          </div>
          <span className="open-portfolio__arrow"></span>
        </div>
      </div>

      <section class="portfolio-desc">
        <div class="portfolio-desc__wrap">
          <h3 class="portfolio-desc__title">FIRST APPROACH</h3>
          <p class="portfolio-desc__subtitle">Previous site analysis</p>
          <p class="portfolio-desc__text">
            Make and extensive analysis to the existing site was the first step
            of our project approaching. We detected opportunities to improve the
            information structure in order to provide a more intuitive
            experience to the user.
          </p>

          <p class="portfolio-desc__subtitle">Wireframes and prototypes</p>
          <p class="portfolio-desc__text">
            Given aspects such as the content of the portal, the business goals
            and several usability reviews were designed the structure of each
            page and the user interaction flow.
          </p>
        </div>
        <div class="portfolio-desc__images">
          <a class="portfolio-desc__image-link" href="#">
            <img
              class="portfolio-desc__image"
              src={img1}
              alt=""
            />
          </a>
          <a class="portfolio-desc__image-link" href="#">
            <img
              class="portfolio-desc__image"
              src={img2}
              alt=""
            />
          </a>
          <a class="portfolio-desc__image-link" href="#">
            <img
              class="portfolio-desc__image"
              src={img3}
              alt=""
            />
          </a>
        </div>
      </section>
      </section>
      <Thanks />
  </>
)
}


;

export default OpenPortfolio;
