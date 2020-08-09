import React, { useContext } from "react";
import { Table } from "reactstrap";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const context = useContext(TodoContext);
  console.log(context);
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Do something</th>
          <th>Time end</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <TodoItem />
      </tbody>
    </Table>
  );
}

export default TodoList;
