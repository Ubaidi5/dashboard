const initialState = { mode: "light" };

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ENABLE_LIGHT_MODE":
      return state;
    default:
      return state;
  }
};

export default appReducer;
