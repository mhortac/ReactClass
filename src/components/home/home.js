import React from "react";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import "./home.css";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-page-element">
        <h1> Mis Contactos</h1>

        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={"/contact-list"}
        >
          Entrar
        </Button>

        <h1> Usuarios Externos</h1>

        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={"/external-users-list"}
        >
          Entrar
        </Button>
      </div>
    </div>
  );
}
