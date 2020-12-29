import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

import ContactListItem from "./contact-list-item/contact-list-item";
import "./contact-list.css";

export default function ContactList() {
  const { contacts } = useSelector((state) => state);
  console.log(contacts);
  let contact_list = [];
  let data = JSON.parse(localStorage.getItem("contacts-list"));

  if (data && data.length) {
    contact_list = data;
  }

  return (
    <div className="wrap-contact-list">
      <div className="toolbar-contact-list">
        <Button variant="contained" color="primary" component={Link} to={"/"}>
          Ir al Inicio
        </Button>

        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to={"/contact-create"}
        >
          Nuevo Contacto
        </Button>
      </div>

      <h2> Mis Contactos ({contacts})</h2>
      {contact_list.length === 0 ? (
        <div className="empty-list-wrap">
          <Icon className="empty-list-icon">sentiment_dissatisfied</Icon>
          <div className="empty-list-text">No hay datos para mostrar</div>
        </div>
      ) : null}

      <div className="contact-list-items">
        {contact_list.map((item, key) => {
          return (
            <ContactListItem key={key} contact={item} className="item-list" />
          );
        })}
      </div>
    </div>
  );
}
