const initialState = {
  developersList: [],
};

 
 const developersReduser = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DEVELOPERS":
      return {
        ...state,
        developersList: action.payload,
      }
    
    default: {
      return state;
      }
  }
}

export default developersReduser;
