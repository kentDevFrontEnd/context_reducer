import { ADD_ITEM, DEL_ITEM } from "./action";

const addItem = (item, state) => {
  return [...state, item];
};

export default (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return addItem(action.payload, state);
    default:
      return state;
  }
};
