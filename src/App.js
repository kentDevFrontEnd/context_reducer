import React from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className="text-center text-primary">Todo List</h1>
          </Col>
        </Row>
        <AddTodo />
        <TodoList />
      </Container>
    </TodoProvider>
  );
}

export default App;
