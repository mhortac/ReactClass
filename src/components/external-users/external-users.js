import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

export default function ExternalUser() {
  const [users, setUsers] = React.useState([]);

  function getUsers() {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  }

  React.useEffect(() => {
    getUsers().then((rta) => {
      setUsers(rta.data);
    });
  }, []);

  return (
    <div className="external-users-list">
      <div className="toolbar-contact-list">
        <Button variant="contained" color="primary" component={Link} to={"/"}>
          Ir al Inicio
        </Button>
      </div>

      {users.map((user, key) => {
        return (
          <div className="contact-list-item" key={key}>
            <div className="item-icon">
              <Icon> account_circle </Icon>
            </div>
            <div className="item-info">
              <div className="item-info-name"> {user.name} </div>
              <div className="item-info-number"> {user.phone} </div>
            </div>
            <div className="item-controls"></div>
          </div>
        );
      })}
    </div>
  );
}
