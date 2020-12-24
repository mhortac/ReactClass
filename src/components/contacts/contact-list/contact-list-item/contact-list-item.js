import React from "react";

import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

import "./contact-list-item.css";

export default function ContactListItem({ contact, status, fn }) {
  return (
    <div className="contact-list-item">
      <div className="item-icon">
        <Icon> account_circle </Icon>
      </div>
      <div className="item-info">
        <div className="item-info-name"> {contact.name} </div>
        <div className="item-info-number"> {contact.number} </div>
      </div>
      <div className="item-controls">
        <IconButton
          variant="contained"
          color="primary"
          aria-label="delete"
          component={Link}
          to={"/contact-update/1"}
          className="button-icon button-icon-edit"
        >
          <Icon> create </Icon>
        </IconButton>

        <IconButton
          variant="contained"
          color="primary"
          aria-label="delete"
          className="button-icon button-icon-delete"
        >
          <Icon> delete_forever </Icon>
        </IconButton>
      </div>
    </div>
  );
}
