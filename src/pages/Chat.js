import React, { Component } from 'react'
import { connect } from "react-redux";
import Navigation from "../components/Navigation";
import { getPosts } from "../actions/getPosts.js"
import { submitPost } from "../actions/submitPost.js"
import ChatContainer from "./components/chatContainer.js"
import './components/chat.css'


class Chat extends Component {
    constructor(props) {
        super()
        this.state={
            messages: "",
            likeInput: 0
        }
    }

    componentDidMount() {
        console.log("a")
        this.props.getPosts()
        console.log("b")
        console.log(this.props.loginReducer.name)
    }

    handleChange = () => (event) => {
        this.setState(
            {
            [event.target.name]: event.target.value,
            },
            () => {
            console.log(this.state);
            }
        );
    };

    handleSubmit = (user, newMessage) => (event) => {
        event.preventDefault()
        console.log(this.props.loginReducer.name, this.state.message)
        this.props.submitPost(this.props.loginReducer.name, this.state.message)
        const todoText = this.todoTextElem.value;
        if(todoText.length > 0){

            this.todoTextElem.value = '';  
        } 
    }

    render() {
        const messages = Object.entries(this.props.postReducer.messages).map(([keys, value])=>{
            return (
                <div key={value["id"]}>
                {console.log(value["user"]["name"])}
                <div className="chatName">{value["user"]["name"]}:</div>
                <div className="chatMessage">{value["message"]}</div>
                
                </div>
            )
        })

        return(
            <div>
                <Navigation />
                <div>
                    <div className="chatContainer">
                        <h2>Networking forums</h2>
                    </div>
                    <div>
                    <ChatContainer messages={messages}/>
                    {/*messages*/}
                    </div>
                    <div>
                        <div className="chatContainer">
                            <div className="inputBackground">
                                {/* <div className="messageTitle">Add a message: </div> */}
                                <input className="chatInput" name="message"
                                placeholder="Add a message"
                                ref= {el => this.todoTextElem = el} onChange={this.handleChange()}></input>
                                <button className="submitBtn" onClick={this.handleSubmit()}>submit</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const MSP = (globalState) => {
    //console.log('FROM CONNECT', globalState)
    return globalState
}

const MDP = (dispatch) => {
    return {
        getPosts: () => dispatch(getPosts()),
        submitPost: (user, message) => dispatch(submitPost(user, message))
    }
  }
//mapStateToProps MSP carrot
export default connect(MSP, MDP)(Chat);
