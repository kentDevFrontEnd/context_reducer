import React from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Container,
  Button,
} from "reactstrap";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { useReducer } from "react";

function AddTodo() {
  const context = useContext(TodoContext);
  const { addItem } = context;

  const [item, setItem] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      todo: "",
      endTime: "",
    }
  );

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const newItem = {
      [key]: value,
    };
    setItem(newItem);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(item);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Row>
          <Col xs={12}>
            <h2>Add toto</h2>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input
                className="form-control"
                name="todo"
                value={item.todo}
                placeholder="do something"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input
                className="form-control"
                name="endTime"
                value={item.endTime}
                placeholder="End time"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Button color="primary" className="btn-block" type="submit">
                Submit
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

export default AddTodo;
