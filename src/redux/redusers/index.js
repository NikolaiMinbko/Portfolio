import { combineReducers } from "redux";
import developersReduser from "./developersReduser";
import portfoliosReduser from "./portfoliosReduser";

const rootReduser = combineReducers({
  developers: developersReduser,
  portfolios: portfoliosReduser,
});

export default rootReduser;
