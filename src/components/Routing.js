import React from "react";
import { Route, Switch, Redirect } from "react-router";
import PageNotFound from "./PageNotFound";
import ProductPage from "./ProductPage";
import Products from "./Products";

const Routing = () => (
  <Switch>
    <Route exact path="/item/:name" component={ProductPage} />
    <Route exact path={["/home", "/"]} component={Products} />
    <Route exact path="/pagenotfound" component={PageNotFound} />
    <Redirect to="/pagenotfound" />
  </Switch>
);

export default Routing;
