const INCREMENT_CONTACT = "INCREMENT_CONTACT";
const DECREMENT_CONTACT = "DECREMENT_CONTACT";

const initialState = {
  isLogged: false,
  user: null,
  contacts: readLocalStorage(),
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_CONTACT:
      return {
        ...state,
        contacts: state.contacts + 1,
      };

    case DECREMENT_CONTACT:
      return {
        ...state,
        contacts: state.contacts - 1,
      };

    default:
      return { ...state };
  }
};

function readLocalStorage() {
  return JSON.parse(localStorage.getItem("contacts-list"))
    ? JSON.parse(localStorage.getItem("contacts-list")).length
    : 0;
}
export default contactReducer;
