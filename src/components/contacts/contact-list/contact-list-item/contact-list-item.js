import React from "react";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

import { decrementContact } from "redux/actions";

import "./contact-list-item.css";

export default function ContactListItem({ contact, status, fn }) {
  const dispatch = useDispatch();

  function onRemoveContact(contact) {
    let data = JSON.parse(localStorage.getItem("contacts-list"));
    data = data.filter((item) => item.id !== contact.id);
    localStorage.setItem("contacts-list", JSON.stringify(data));

    dispatch(decrementContact());
  }
  return (
    <div className="contact-list-item">
      <div className="item-icon">
        <Icon> account_circle </Icon>
      </div>
      <div className="item-info">
        <div className="item-info-name">{contact.name}</div>
        <div className="item-info-number"> {contact.number} </div>
      </div>
      <div className="item-controls">
        <IconButton
          variant="contained"
          color="primary"
          aria-label="update"
          component={Link}
          to={`/contact-update/${contact.id}`}
          className="button-icon button-icon-edit"
        >
          <Icon> create </Icon>
        </IconButton>

        <IconButton
          variant="contained"
          color="primary"
          aria-label="delete"
          onClick={(e) => onRemoveContact(contact)}
          className="button-icon button-icon-delete"
        >
          <Icon> delete_forever </Icon>
        </IconButton>
      </div>
    </div>
  );
}
