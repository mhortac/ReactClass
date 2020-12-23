import React from "react";
import { Route } from "react-router-dom";
import ContactList from "./contact-list";

import Home from "./home";

export default function Routes() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/contact-list" component={ContactList} />
    </React.Fragment>
  );
}
