const ADD_CONTACT = "INCREASE_COUNTER";

export default (state = { contacts: [] }, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action],
      };

    default:
      return state;
  }
};
