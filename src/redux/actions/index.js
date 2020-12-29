const INCREMENT_CONTACT = "INCREMENT_CONTACT";
const DECREMENT_CONTACT = "DECREMENT_CONTACT";

export function incrementContact(payload) {
  return {
    type: INCREMENT_CONTACT,
    payload: payload,
  };
}

export function decrementContact(payload) {
  return {
    type: DECREMENT_CONTACT,
    payload: payload,
  };
}
