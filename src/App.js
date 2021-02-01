import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./ConfigStore";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
