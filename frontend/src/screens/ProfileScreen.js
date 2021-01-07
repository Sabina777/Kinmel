import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails } from "../actions/userActions";

import { userDetailsReducer } from "../reducers/userReducers";
const ProfileScreen = ({ location, history }) => {
  //email and password useState

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  //get userlogin from state
  const userDetails = useSelector((state) => state.userDetails);
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, user } = userDetails;

  const { usersInfo } = userLogin;
  const dispatch = useDispatch();
  //useEffect
  useEffect(() => {
    if (!usersInfo) {
      history.push("/login");
    } else {
      if (!usersInfo.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(usersInfo.name);
        setEmail(usersInfo.email);
      }
    }
  }, [history, usersInfo, user]);

  //dispatch

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      //dispatch update profile
    }
  };
  return (
    <Row>
      <Col md={3}>
        <h1>User Profile</h1>

        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}

        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="info">
            Update{" "}
          </Button>
        </Form>
      </Col>

      <Col md={9}></Col>
    </Row>
    // <FormContainer>
    //   <h1>Sign Up</h1>

    //   {message && <Message variant="danger">{message}</Message>}
    //   {error && <Message variant="danger">{error}</Message>}

    //   {loading && <Loader />}
    //   <Form onSubmit={submitHandler}>
    //     <Form.Group controlId="name">
    //       <Form.Label>Name</Form.Label>
    //       <Form.Control
    //         type="name"
    //         placeholder="Enter name"
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //       ></Form.Control>
    //     </Form.Group>

    //     <Form.Group controlId="email">
    //       <Form.Label>Email Address</Form.Label>
    //       <Form.Control
    //         type="email"
    //         placeholder="Enter email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       ></Form.Control>
    //     </Form.Group>

    //     <Form.Group controlId="password">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control
    //         type="password"
    //         placeholder="Enter password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       ></Form.Control>
    //     </Form.Group>

    //     <Form.Group controlId="confirmPassword">
    //       <Form.Label>Confirm password</Form.Label>
    //       <Form.Control
    //         type="password"
    //         placeholder="Confirm Password"
    //         value={confirmPassword}
    //         onChange={(e) => setConfirmPassword(e.target.value)}
    //       ></Form.Control>
    //     </Form.Group>
    //     <Button type="submit" variant="info">
    //       Register{" "}
    //     </Button>
    //   </Form>

    //   <Row className="py-3">
    //     <Col>
    //       Have an Account ?<Link to="/login">Login</Link>
    //     </Col>
    //   </Row>
    // </FormContainer>
  );
};

export default ProfileScreen;
