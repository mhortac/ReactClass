import React from "react";

import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import swal from "@sweetalert/with-react";

export default function UpdateContact() {
  const { id } = useParams();
  const history = useHistory();

  const [form, setForm] = React.useState({
    name: "",
    lastName: "",
    number: "",
  });

  React.useEffect(() => {
    let ls_contacts = JSON.parse(localStorage.getItem("contacts-list"));

    if (ls_contacts && ls_contacts.length) {
      let contact = ls_contacts.filter((item) => item.id === parseInt(id))[0];
      if (contact) {
        setForm({
          name: contact.name,
          lastName: contact.lastName,
          number: contact.number,
        });
      } else {
        swal(
          "Operación Fallida",
          `Lo sentimos. Registro con id: ${id} no existe en base de datos.`,
          "error"
        ).then(() => {
          history.push("/contact-list");
        });
      }
    }
  }, [id, history]);

  function onFieldChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();

    let ls_contacts = JSON.parse(localStorage.getItem("contacts-list"));

    if (ls_contacts && ls_contacts.length) {
      let contacts = ls_contacts.map((item) => {
        if (item.id === parseInt(id)) {
          return {
            ...item,
            name: form.name,
            lastName: form.lastName,
            number: form.number,
          };
        } else {
          return item;
        }
      });
      localStorage.setItem("contacts-list", JSON.stringify(contacts));

      swal(
        "Operación Exitosa",
        "Registro Actualizado Exitosamente",
        "success"
      ).then(() => {
        history.push("/contact-list");
      });
    }
  }

  return (
    <div>
      <h1>Editar Contacto</h1>
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
