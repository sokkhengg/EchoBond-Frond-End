import React, { Component } from 'react';
import { connect } from 'react-redux';
import './navigation.css'
import { Link } from 'react-router-dom';
import { logoutAction } from '../actions/loginAction'

class Navigation extends Component {
    constructor(props) {
        super()
        this.state = {
            isLoggedIn: false,
            name: "",
            navBartitles: ["sign up", "sign in"],
            navBarLinks: ["/#/signup", "/#/signin"]
        }
    }

    loggedInNavbar = () => {
        if (this.props.loginReducer.name !== null && this.props.loginReducer.name !== undefined) {
            this.setState({
                isLoggedIn: true,
                name: this.props.loginReducer.name
            })
        } 
    }

    logout = () => {
        localStorage.clear();
        this.props.auth()
    }
    
    render() {
        return(
            
            <nav className="navBarFlexContainer">
                <Link to="/"><div className="navLogo"><span className="cultureLogo">YUC</span><span className="fitLogo"></span></div></Link>
                <div className="navBarInnerContainer">

                {
                    !this.props.loginReducer.loggedIn ?
                    <div className="navElement">
                        
                        {/* <Link to="/signup">Sign up</Link> */}
                        {/* <span className="signupInDivider"> | </span> */}
                        <Link to="/signin">Register</Link>
                    </div>
                    :
                    <div className="navElement">
                        <span className="signupInDivider">Welcome { this.props.loginReducer.name } </span>
                        <span className="signupInDivider"> | </span>
                        <span className="signupInDivider"><Link to="/">Home</Link> </span>
                        <span className="signupInDivider"> | </span>
                        <span className="signupInDivider"><Link to="/chat">Chat</Link> </span>
                        <span className="signupInDivider"> | </span>
                        <Link onClick={this.logout} to="/">Sign out</Link>
                    </div>
      
                  }
                
                </div>
            </nav>
            
        )
    }
}

const MSP = (globalState) => {
    return globalState
}

const MDP = (dispatch) => {
    return {
        auth: () => dispatch(logoutAction())
    }
}

export default connect(MSP, MDP)(Navigation);

/*
//In order to test on github pages links must look like /culturefit-front/#/
*/