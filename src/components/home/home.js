import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "@material-ui/core/Button";

import "./home.css";

export default function Home() {
  const { contacts } = useSelector((state) => state);
  return (
    <div className="home-page">
      <div className="home-page-element">
        <h1> Mis Contactos ({contacts})</h1>

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
