import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function ContactList() {
  let contact_list = [];

  let data = JSON.parse(localStorage.getItem("contacts-list"));

  console.log(data);
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
      <ul>
        {contact_list.map((item, key) => {
          return (
            <li key={key} className="item-list">
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
