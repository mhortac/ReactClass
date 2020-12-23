import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

export default function Container() {
  return (
    <div className="layout-body">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}
