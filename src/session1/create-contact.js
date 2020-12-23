import React from "react";

import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

export default function CreateContact() {
  const [form, setForm] = React.useState({
    name: "",
    type: "",
    identify: "",
    lastName: "",
    number: "",
  });

  function onSubmit(event) {
    console.log(event);
    event.preventDefault();
    //saveOnLocalStorage(form);
  }

  function onFieldChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function saveOnLocalStorage(new_contact) {
    console.log(new_contact);

    let data = JSON.parse(localStorage.getItem("contacts-list"));
    console.log(data);

    if (data && data.length > 0) {
      data.push(new_contact);
    } else {
      data = [new_contact];
    }

    localStorage.setItem("contacts-list", JSON.stringify(data));
  }

  return (
    <div>
      <div className="toolbar-contact-list">
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={"/contact-list"}
        >
          Mis contactos
        </Button>
      </div>

      <Card className="custom-card">
        <CardContent>
          <form className="custom-form" onSubmit={onSubmit}>
            <label> Tipo de Identificación</label>
            <select
              name="type"
              value={form.type}
              onChange={(e) => onFieldChange(e)}
            >
              <option value="CC">Cédula</option>
              <option value="T.I">Tarjeta de Identidad</option>
              <option value="C.E">cédula de Extranjería</option>
            </select>
            <label> Identificación</label>
            <input
              name="identify"
              value={form.identify}
              onChange={(e) => onFieldChange(e)}
            />
            <label> Nombre</label>
            <input
              name="name"
              value={form.name}
              onChange={(e) => onFieldChange(e)}
            />
            <label> Apellido</label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={(e) => onFieldChange(e)}
            />
            <label> Número de Contacto</label>
            <input
              name="number"
              value={form.number}
              onChange={(e) => onFieldChange(e)}
            />

            <Button variant="contained" color="primary" type="submit">
              GUARDAR
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
