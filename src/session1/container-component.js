import React from "react";

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
        <input name="age" value={form.age} onChange={(e) => onFieldChange(e)} />

        <button type="submit"> ENVIAR </button>
      </form>

      <ul>
        {contacts.map((item, key) => {
          return (
            <li key={key} className="item-list">
              <img
                className="item-image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png"
                alt="imagen"
              />
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
