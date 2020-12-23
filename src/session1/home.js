import React from "react";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1> Mis Contactos</h1>

      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={"/contact-list"}
      >
        Ir a mis contactos
      </Button>
    </div>
  );
}
