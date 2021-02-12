import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./configurations/theme";
import { connect } from "react-redux";

function App(props) {
  return (
    <ThemeProvider theme={{ ...theme, mode: props.mode }}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
//ajklshdjiasgfui
const mapState = (state) => ({
  mode: state.app.mode,
});

export default connect(mapState)(App);
