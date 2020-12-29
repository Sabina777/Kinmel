import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import Message from "../components/Message";
import { addTodo, deleteTodo, getTodos } from "../actions/todoActions";
import FormContainer from "../components/FormContainer";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
const TodoScreen = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  //get todos using selector
  const todoList = useSelector((state) => state.todoList);
  const { loading, error, todos } = todoList;
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo({ text }));
  };
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <FormContainer>
      <TodoForm />
      <TodoList />
    </FormContainer>
  );
};

export default TodoScreen;
