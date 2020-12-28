const ADD_CONTACT = "ADD_CONTACT";
const READ_CONTACT = "READ_CONTACT";

function createContact(contact) {
  return {
    type: ADD_CONTACT,
    payload: contact,
  };
}

function readContact(payload) {
  return {
    type: READ_CONTACT,
    payload: payload,
  };
}
