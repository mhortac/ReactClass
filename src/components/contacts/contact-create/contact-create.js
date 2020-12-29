import React from "react";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";

import { incrementContact } from "redux/actions";
import swal from "@sweetalert/with-react";
import "./contact-create.css";

export default function CreateContact() {
  const dispatch = useDispatch();

  const [error, setError] = React.useState({
    name: "",
    lastName: "",
    number: "",
  });

  const [form, setForm] = React.useState({
    name: "",
    lastName: "",
    number: "",
  });

  function onSubmit(event) {
    event.preventDefault();
    saveOnLocalStorage({ ...form, id: new Date().getTime() });
    dispatch(incrementContact());
    resetForm();
  }

  function onFieldChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleError(key, value) {
    setError({
      ...error,
      [key]: value,
    });
  }

  function resetForm() {
    setForm({
      name: "",
      lastName: "",
      number: "",
    });
  }

  function formValidation() {
    if (!form.name) {
      handleError("name", "Campo requerido");
      return false;
    }

    if (!form.number) {
      handleError("number", "Campo requerido");
      return false;
    }

    if (form.number.toString().length !== 10) {
      handleError("number", "Campo no cumple con el tamaño permitido");
      return false;
    }

    setError({
      name: null,
      lastName: null,
      number: null,
    });
    return true;
  }

  function saveOnLocalStorage(new_contact) {
    if (formValidation()) {
      let data = JSON.parse(localStorage.getItem("contacts-list"));
      if (data && data.length > 0) {
        data.push(new_contact);
      } else {
        data = [new_contact];
      }

      localStorage.setItem("contacts-list", JSON.stringify(data));

      swal("Operación Exitosa", "Registro Creado Exitosamente", "success");
    } else {
      swal(
        "Operación Fallida",
        "Verifique la información del formulario",
        "error"
      );
    }
  }

  return (
    <div>
      <h1>Crear Contacto</h1>
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
            <TextField
              error
              label="Nombre"
              name="name"
              helperText={error.name}
              value={form.name}
              onChange={(e) => onFieldChange(e)}
              variant="outlined"
            />

            <TextField
              error={!!error.lastName}
              label="Apellido"
              name="lastName"
              helperText={error.lastName}
              value={form.lastName}
              onChange={(e) => onFieldChange(e)}
              variant="outlined"
            />

            <TextField
              error={!!error.name}
              label="Número de contacto"
              name="number"
              helperText={error.number}
              value={form.number}
              onChange={(e) => onFieldChange(e)}
              variant="outlined"
            />

            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ marginTop: "2em" }}
            >
              GUARDAR
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
