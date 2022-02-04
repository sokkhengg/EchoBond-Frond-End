import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Signup({ setCurrentUser, currentUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [validated, setValidated] = useState(false);

  let navigate = useNavigate();

  function handleSignupSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    e.preventDefault();

    fetch("http://127.0.0.1:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        username: username,
        password: password,
      })
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          console.log(user);
          setError("");
          setCurrentUser(user);
          navigate("/")
        });
      } else {
        r.json().then((err) => {
            setCurrentUser({})
            setError(err);
        });
      }
    });
  }

  return (
    <div>
       <Container>
        <Row>
          <Col></Col>
          <Col xs={10}>
      <Form noValidate
        // validated={validated}
        onSubmit={handleSignupSubmit}
        id="signup-form">

        <Form.Group className="mb-3" controlId="signup-username">
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
                  Username required.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="signup-firstname">
          <Form.Control
            type="text"
            placeholder="Firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
                  Firstname required.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="signup-lastname">
          <Form.Control
            type="text"
            placeholder="Lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
                  Lastname required.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="signup-password">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
                  Password required.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="standard-button">
          Sign up
        </Button>
      </Form>
      </Col>
          <Col></Col>
        </Row>
      </Container>

      { error ? <p>Try again to signup 🛑.</p> : null }

      { currentUser.user ? <p>You are logged in as {currentUser.user.first_name} {currentUser.user.last_name}</p> : null }

    </div>
  );
}

export default Signup;
