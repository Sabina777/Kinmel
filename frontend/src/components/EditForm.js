import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";

const EditForm = ({ setInputText, todos, setTodos, inputText, id }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      todos.find((todo) => (todo.id === id ? e.target.value : todo)),
    ]);
    console.log(todos);
  };
  return (
    <Form onSubmit={submitTodoHandler}>
      <Row>
        <Col>
          <Form.Group controlId="todo">
            <Form.Control
              type="text"
              placeholder="Edit todo"
              value={inputText}
              onChange={inputTextHandler}
            ></Form.Control>
          </Form.Group>
        </Col>

        <Col>
          <Button type="submit" variant="info">
            Ok
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default EditForm;
