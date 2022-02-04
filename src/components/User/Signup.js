import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';


function Signup({ setCurrentUser, currentUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  function handleSignupSubmit(e) {
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
      <Form onSubmit={handleSignupSubmit} id="signup-form">

        <Form.Group className="mb-3" controlId="signup-username">
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="signup-password">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="standard-button">
          Sign up
        </Button>
      </Form>

      { error ? <p>Incorrect username or password. Please try again or sign up.</p> : null }

      { currentUser.user ? <p>You are logged in as {currentUser.user.first_name} {currentUser.user.last_name}</p> : null }

    </div>
  );
}

export default Signup;
