const initialState = {
  portfoliosList: [],
};

 
 const portfoliosReduser = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PORTFOLIOS":
      return {
        ...state,
        portfoliosList: action.payload,
      }
    
    default: {
      return state;
      }
  }
}

export default portfoliosReduser;