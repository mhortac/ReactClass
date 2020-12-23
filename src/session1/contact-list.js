import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function ContactList() {
  const contacts = [1, 2, 3, 4, 5, 6];

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
        {contacts.map((item, key) => {
          return (
            <li key={key} className="item-list">
              <Icon className="item-icon"> person </Icon>
              <div className="item-desc">Murphy Horta Camargo</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
