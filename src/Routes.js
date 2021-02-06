import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Shell from "./views/shell/Shell";
import Login from "./views/Login";

const Routes = () => {
  const isAuthorized = true;
  return (
    <Switch>
      <Route
        path="/"
        component={() => (isAuthorized ? <Shell /> : <Login />)}
      />
    </Switch>
  );
};

export default connect(null)(Routes);
