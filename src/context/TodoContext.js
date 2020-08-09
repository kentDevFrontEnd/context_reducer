import React, { createContext, useReducer } from "react";
import TodoReducer from "./TodoReducer";
import { ADD_ITEM } from "./action";

const TodoContext = createContext();

const TodoProvider = (props) => {
  const initialState = [
    {
      todo: "hoc",
      endTime: "1201",
    },
    {
      todo: "choi",
      endTime: "1205",
    },
    {
      todo: "lam",
      endTime: "1204",
    },
    {
      todo: "xem",
      endTime: "1203",
    },
  ];

  const [todoItems, dispatch] = useReducer(TodoReducer, initialState);

  const addItem = (item) => {
    console.log(item);
    dispatch({
      type: ADD_ITEM,
      payload: item,
    });
  };

  return (
    <TodoContext.Provider value={{ todoItems, addItem }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
