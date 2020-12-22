import React from "react";

import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const titleStyle = {
  color: "red",
  fontSize: "3em",
};

export default function Container() {
  const [contacts, setContacts] = React.useState([]);

  const [form, setForm] = React.useState({
    name: "",
    type: "",
    identify: "",
    lastName: "",
    age: "",
  });

  function onFieldChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log(form);
    setContacts([...contacts, form]);
  }
  return (
    <div className="layout-body">
      <h1 style={titleStyle}> Murphy </h1>

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
            <label> Edad</label>
            <input
              name="age"
              value={form.age}
              onChange={(e) => onFieldChange(e)}
            />

            <Button variant="contained" color="primary" type="submit">
              GUARDAR
            </Button>
          </form>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <ul>
        {contacts.map((item, key) => {
          return (
            <li key={key} className="item-list">
              <Icon className="item-icon"> person </Icon>
              <div className="item-desc">
                {item.name} {item.lastName}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
