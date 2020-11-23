import React from "react";

const OpenPortfolioDescr = () => (
  <section class="portfolio-desc">
    <div class="portfolio-desc__wrap">
      <h3 class="portfolio-desc__title">FIRST APPROACH</h3>
      <p class="portfolio-desc__subtitle">Previous site analysis</p>
      <p class="portfolio-desc__text">
        Make and extensive analysis to the existing site was the first step of
        our project approaching. We detected opportunities to improve the
        information structure in order to provide a more intuitive experience to
        the user.
      </p>

      <p class="portfolio-desc__subtitle">Wireframes and prototypes</p>
      <p class="portfolio-desc__text">
        Given aspects such as the content of the portal, the business goals and
        several usability reviews were designed the structure of each page and
        the user interaction flow.
      </p>
    </div>
    <div class="portfolio-desc__images">
      <a class="portfolio-desc__image-link" href="#">
        <img
          class="portfolio-desc__image"
          src="./images/example-1.jpg"
          alt=""
        />
      </a>
      <a class="portfolio-desc__image-link" href="#">
        <img
          class="portfolio-desc__image"
          src="./images/example-2.jpg"
          alt=""
        />
      </a>
      <a class="portfolio-desc__image-link" href="#">
        <img
          class="portfolio-desc__image"
          src="./images/example-3.jpg"
          alt=""
        />
      </a>
    </div>
  </section>
);

export default OpenPortfolioDescr;
