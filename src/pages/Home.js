import React, { Component } from "react";
import Navigation from "../components/Navigation";
import "./home.css";
import { connect } from "react-redux";
import { HomeLoggedOut } from "./HomeLoggedOut";
import HomeLoggedIn from "./HomeLoggedIn";

class Home extends Component {

  render() {
    console.log("my props" + this.props.loginReducer.loggedIn);
    return (
      <div>
        <Navigation />

        {!this.props.loginReducer.loggedIn ? (
          <HomeLoggedOut />
        ) : (
          <HomeLoggedIn userType={this.props.loginReducer.userType} />
        )}
      </div>
    );
  }
}

const MSP = (globalState) => {
  //debugger
  console.log("FROM Home", globalState);
  return globalState;
};

export default connect(MSP)(Home);
