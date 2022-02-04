import React from "react";
import Login from "./Login";
import Signup from "./Signup";
// import Splash from "./Splash";
import "./User.css";

// Bootstrap
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Forms({ setCurrentUser, currentUser }) {
  return (
    <div style={{ height: "80vh" }}>
      <Row
        className="g-0 align-middle"
        id="full-row"
        style={{ height: "92.79vh" }}
      >
        {/* <Col id="half-page">
          <Splash />
        </Col> */}

        <Col>
          <Container>
            <Row className="g-0" id="form-container">
              <Col></Col>
              <Col xs={7} className="text-center">
                <Tabs
                  defaultActiveKey="login"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="login" title="Log in">
                    <Login
                      setCurrentUser={setCurrentUser}
                      currentUser={currentUser}
                    />
                  </Tab>

                  <Tab eventKey="signup" title="Sign up">
                    <Signup
                      setCurrentUser={setCurrentUser}
                      currentUser={currentUser}
                    />
                  </Tab>
                </Tabs>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default Forms;
