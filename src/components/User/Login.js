import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Login({ setCurrentUser, currentUser }) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    function handleLoginSubmit(e) {
        e.preventDefault();
        fetch("http://127.0.0.1:3000/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
            }
        )
        .then(r => {
            console.log(r)
            if (r.ok) {
              r.json().then(user => {
                setError("")
                setSuccess(user)
                setCurrentUser(user)
              });
            } else {
              r.json().then(err => setError(err));
            }
          });
    }

    //MOVE TO INLINE!
    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

  return (
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={10}>
            <Form onSubmit={handleLoginSubmit}>
              <Form.Group className="mb-3" controlId="login-username">
              <Form.Control type="text" placeholder="Username" value={username} onChange={handleUsername} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="login-password">
                <Form.Control type="password" placeholder="Password" value={password} onChange={handlePassword} />
              </Form.Group>

              <Button variant="primary" type="submit" id="login-button">
                Log in
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      { error ? <p>Incorrect username or password. Please try again or sign up.</p> : null }

      { currentUser.user ? <p>You are logged in as {currentUser.user.first_name} {currentUser.user.last_name}</p> : null }
      
    </div>
  );
}

export default Login;
