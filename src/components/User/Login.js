import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Login({ setCurrentUser, currentUser }) {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [validated, setValidated] = useState(false);

  function handleLoginSubmit(e) {
    const form = e.currentTarget;
    //setCurrentUser({})
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

    e.preventDefault();
    fetch("http://127.0.0.1:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          localStorage.setItem("token", user.token);
          setSuccess(user);
          setCurrentUser(user);
          setError("");
          setUsername("");
          setPassword("");
          navigate("/");
        });
      } else {
        r.json().then((err) => {
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
            <Form
              noValidate
              validated={validated}
              onSubmit={handleLoginSubmit}
              id="login-form"
            >
              <Form.Group className="mb-3" controlId="login-username">
                <Form.Control
                  required
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Username required.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="login-password">
                <Form.Control
                  required
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
                Log in
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      {error ? (
        <p>Try again to login.</p>
      ) : null}

      {currentUser.user ? (
        <p>
          You are logged in as {currentUser.user.first_name}{" "}
          {currentUser.user.last_name}
        </p>
      ) : null}
    </div>
  );
}

export default Login;
