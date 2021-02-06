const initialState = { mode: "light" };

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_APP_MODE":
      return { mode: action.payload };
    default:
      return state;
  }
};

export default appReducer;
