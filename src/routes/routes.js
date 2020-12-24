// React Imports
import React from "react";
import { Route } from "react-router-dom";
// App imports
import Home from "components/home/home";
import ContactList from "components/contacts/contact-list/contact-list";
import ContactCreate from "components/contacts/contact-create/contact-create";
import ContactUpdate from "components/contacts/contact-update/contact-update";

export default function Routes() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/contact-list" component={ContactList} />
      <Route path="/contact-create" component={ContactCreate} />
      <Route path="/contact-update/:id" component={ContactUpdate} />
    </React.Fragment>
  );
}
