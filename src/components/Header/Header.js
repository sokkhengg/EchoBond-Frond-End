import React from "react";
import "./Header.css";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Header({ currentUser }) {
  return (
    <div>
      <Row id="header-row">

        <Col xs={5} id="header-wordmark">
          <h1>YUC-Company</h1>
        </Col>

        <Col xs={5}>
          <Nav fill activeKey="/home">
            
            <Nav.Item>
              <Link to="/home" id="header-nav-link">
                Home
              </Link>
            </Nav.Item>
            
            <Nav.Item>
            <Link to="/company" id="header-nav-link">
                Company
            </Link>
            </Nav.Item>

            <Nav.Item>
            <Link to="/add" id="header-nav-link">
                Add
            </Link>
            </Nav.Item>

            <Nav.Item>
            <Link to="/schedule" id="header-nav-link">
                Schedule
            </Link>
            </Nav.Item>

          </Nav>
        </Col>

        {/* put some cute cat profile for testing */}
        <Col xs={2} id="header-user">
          {/* puts currentUser and setCurrentUser in app.js for better experience */}
          {currentUser.user ? (
            <>
              <Row>
                <div className="user-parent">
                  <p className="user-child">{currentUser.user.first_name}</p>
                  <img
                    className="user-child"
                    src="cute-profile.png"
                    alt="cute-profile pic"
                    height="35px"
                  />
                </div>
              </Row>
            </>
          ) : <>
           <Link to="/login" id="header-nav-link">
                Login
              </Link></>}
        </Col>
      </Row>
    </div>
  );
}

export default Header;
