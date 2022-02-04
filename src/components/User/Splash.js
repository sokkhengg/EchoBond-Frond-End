import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Splash() {
  return(
      <>
          <Row style={{ height: "100vh" }} className="text-center align-middle">
          <Row className="g-0 align-middle" id="full-row">&nbsp;</Row>
              <Col></Col>
              <Col xs={10} className="text-center align-middle">
                  <h1 className="white-text">Welcome Future Talent</h1>
                  <h4 className="white-text">Checking what company you like and make connection with people who looking for the the same company</h4>
              </Col>
              <Col></Col>
          </Row>
      </>);
}

export default Splash;
