import React from "react";
import PortfolioSection from "./PortfolioSection";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

const req = require.context("../images/portfolio-img");
const images = req.keys().map(req);

const Portfolio = () => {
  const portfolios = useSelector(({ portfolios }) => portfolios.portfoliosList);
  return (
    <>
      {portfolios.map((item, index, ) => (
        <section key={index + item} className="portfolio section">
          <Switch>
            <Route path="/" exact>
              <PortfolioSection image={images[index]} index={index} {...item}/>
            </Route>
          </Switch>
        </section>
      ))}
    </>
  );
};

export default Portfolio;
