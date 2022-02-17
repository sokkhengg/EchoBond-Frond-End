import React, { Component } from 'react';
import { connect } from "react-redux";
import QuizContainer from "./QuizContainer"
import './userquiz.css';

class UserQuiz extends Component {
    constructor(props) {
        super();
        this.state = {
            quizName: "",
            quizID: null,
            quizData: {},
            quizAttributes: {},
            quizComplete: false
        };
    }
    componentDidMount() {
        return fetch(`http://localhost:3000/quizzes/${this.props.currentQuiz}`, {
            method: "get",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json",
                // "Access-Control-Allow-Headers": "Authorization",
                // "Accept": "application/json"
            }
        }).then((response) => response.json())
        .then(data => {
            //console.log(data) 
            
            this.setState({ 
                quizName: data.custom_quiz_hash.name,
                quizData: data.custom_quiz_hash.questions,
                quizID: data.custom_quiz_hash.quiz_id,
                user_attribute: ""
                //quizzes: quizzesTemp
            })  
            console.log(this.state.quizData)
        })
        .catch((error) => {
            console.error('Error:', error);
          });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let total = {}
        let userScore = []
        Array.prototype.forEach.call(event.target.elements, (element) => {
            if (element.checked) {
                let valueName = element.value
                if (valueName in total) {
                    total[valueName] = total[valueName] + 1
                } else {
                    total[valueName] = 1
                }
                console.log(total[valueName])
            }
          })
          for (let key in total) {
              userScore.push({
                  attr: key,
                  score: total[key]
              })
          }
          this.setState({
              quizAttributes: userScore
          }, () => { console.log( this.state )})
          console.log(this.state.quizAttributes)
            return fetch('http://localhost:3000/user_attributes', {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    // "Access-Control-Allow-Headers": "Authorization",
                    // "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: this.props.loginReducer.name,
                    quizID: this.state.quizID,
                    userScore
                })
            }).then((response) => {
                response.json()
            })
            .then(data => {
                console.log(data)
                this.setState({
                    quizComplete: true
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    render() {
        const quizData = Object.entries(this.state.quizData).map(([k,value])=>{
            return (
                <div className="questionSet" key={value["question_id"]}>
                {console.log(value["question_id"])}
                    <div key={value.question_name.question_id}>
                    {value.question_name.question}
                    </div>
                    {
                    Object.entries(value.answers).map(([answerKey, answerValue]) => {
                        return <div className="answers" key={answerKey}>
                        <input type="radio" id={answerValue.answer_name.answer} name={value.question_id} value={answerValue.answer_attribute.answer_attribute} key={answerValue.answer_name.answer_id}/>
                        {answerValue.answer_name.answer}
                        </div>
                    })}
                </div>
            );
          })


        return(
            <div>
                <div className="quizContainer">
                {
                    !this.state.quizComplete ? 
                        <div className="innerQuiz">
                            <button onClick={this.props.backBtn()}>⏪</button>
                            <div>
                                <h2>{this.state.quizName.toString()}</h2>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                            <QuizContainer quiz={quizData} />
                            
                            <button className="submit">Submit</button>
                            </form>
                        </div>
                    :
                    <div className="innerQuiz">
                        <h2>Survey complete</h2>
                        <button onClick={this.props.backBtn()}>Go Back</button>
                    </div>
                }
                    
                    
                </div>
                
            </div>
        )
    }
}

const MSP = (globalState) => {
    //debugger
    console.log('FROM CONNECT', globalState)
    return globalState
}

const MDP = (dispatch) => {
    return {
        //auth: (name, usertype) => dispatch(loginAction(name, usertype))
        
    }
  }

export default connect(MSP, MDP)(UserQuiz);