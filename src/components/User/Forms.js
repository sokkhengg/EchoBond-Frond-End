import React from "react";
// components
import Login from "./Login";
import Signup from "./Signup";
// import Splash from "./Splash"; // put a good welcome message when user is logged in
import "./User.css";
// Bootstrap
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Forms({ setCurrentUser, currentUser }) {
  return (
    <div style={{ height: "100vh" }}>
      <Row className="g-0 align-middle" id="full-row" style={{ height: "100vh" }} >
        {/* <Col id="half-page">
          <Splash />
        </Col> */}

        <Col>
          <Container>
          {/* leave some margin out from the header */}
          {/* <Row className="g-0 align-middle" id="full-row">&nbsp;</Row> */}
          {/* <Row className="g-0 align-middle" id="full-row">&nbsp;</Row> */}
          {/* <Row className="g-0 align-middle" id="full-row">&nbsp;</Row> */}
          <Row className="g-0 align-middle" id="full-row">&nbsp;</Row>
            <Row className="g-0">
              <Col></Col>
              <Col xs={8} className="text-center">
                <Tabs
                  defaultActiveKey="login"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="login" title="Log in">
                    <Login setCurrentUser={setCurrentUser} currentUser={currentUser} />
                  </Tab>

                  <Tab eventKey="signup" title="Sign up">
                    <Signup setCurrentUser={setCurrentUser} currentUser={currentUser} />
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
