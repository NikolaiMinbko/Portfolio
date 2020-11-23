import React, { useEffect } from "react";
import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";
import { Route, Switch } from "react-router-dom";

// COMPONENTS

import Welcome from "./components/Welcome";
import Header from "./components/Header";
// import PortfolioSection from "./components/PortfolioSection";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Form from "./components/Form";
import { AllPortfolios } from "./components/AllPortfolios";
import { AllDevelopers } from "./components/AllDevelopers";
import OpenPortfolio from "./components/OpenPortfolios/OpenPortfolio-1";

//REDUX

import { useDispatch } from "react-redux";
import { addPortfolios } from "./redux/actions/portfoliosAction";
import { addDevelopers } from "./redux/actions/developersAction";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPortfolios(AllPortfolios));
    dispatch(addDevelopers(AllDevelopers));
    
  }, []);


  return (
    <>
      <header className="header">
        <Header />
      </header>
      <Switch>
        <Route path="/" exact>
          <ReactFullpage
            scrollingSpeed={700}
            scrollOverflow={true}
            fixedElements={"header"}
            navigation={true}
            navigationPosition={"left"}
            sectionsColor={["", "#4873a5", "#78B98D", "#203778"]}
            render={() => {
              return (
                <ReactFullpage.Wrapper>
                  <Welcome />
                  <Portfolio />
                </ReactFullpage.Wrapper>
              );
            }}
          />
        </Route>
        <Route path="/portfolios/:id" exact render={() => {return <OpenPortfolio />}}/>
        <Route path="/about" exact>
          <About />
          <Form />
        </Route>
      </Switch>
    </>
  );
};

export default App;
