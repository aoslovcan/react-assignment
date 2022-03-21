import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "../layouts/HomePage/HomePage";
import PostPage from "../layouts/PostPage/PostPage";

function Routes(props) {
  const helloMessage = "Hello from";
  return (
    <Switch>
      <Route exact path="/posts">
        <HomePage message={helloMessage} />
      </Route>
      <Route exact path="/post/:id">
        <PostPage message={helloMessage} />
      </Route>
      <Route exact path="/">
        <Redirect to="/posts" />
      </Route>
    </Switch>
  );
}

export default Routes;
