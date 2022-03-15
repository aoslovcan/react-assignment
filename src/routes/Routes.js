import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "../layouts/HomePage/HomePage";

function Routes(props) {
  const helloMessage = "Hello from";
  return (
    <Switch>
      <Route path="/posts">
        <HomePage message={helloMessage} />
      </Route>
      <Route path="/">
        <Redirect to="/posts" />
      </Route>
    </Switch>
  );
}
export default Routes;
