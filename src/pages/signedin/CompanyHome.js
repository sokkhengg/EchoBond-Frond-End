import React, { Component } from 'react';
import SubNav from './components/SubNav'
import { connect } from "react-redux";
import './company.css'
import './userquiz.css';
import QuizScores from './components/QuizScores.js';
// import QuizContainer from "./QuizContainer"

class CompanyHome extends Component {
    constructor(props) {
        super();
        this.state = {
            currentView: "createQuiz",
            formData: "",
            quizSubmitted: false,
            username: props.loginReducer.name,
            quizTitle: "",
            questions: [
                {
                    question: "",
                    answers: [
                        {
                            answer: "",
                            attribute: ""
                        },
                        {
                            answer: "",
                            attribute: ""
                        }
                    ]
                }
            ],
            uniqueQuizList: [

            ],
            viewQuizzes: true,
            currentQuiz: 0
        };
        //console.log(this.state)
    }

    componentDidMount() {
        return fetch('http://localhost:3000/user_attributes/unique', {
            method: "get",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json",
                // "Access-Control-Allow-Headers": "Authorization",
                // "Accept": "application/json"
            }
        }).then((response) => response.json())
        .then(data => {
            this.setState({
                uniqueQuizList: data
            }, () => {
                console.log(this.state)
            })
        })
        .catch((error) => {
            console.error('Error:', error);
          });
    }

    createQuizBtn = () => (event) => {
        event.preventDefault();
        this.setState({
            currentView: "createQuiz"
        })
    }

    viewCompletedQuizzesBtn = () => (event) => {
        event.preventDefault();
        this.setState({
            currentView: "viewQuizzes"
        })
    }

    addQuestionBtn = () => (event) => {
        event.preventDefault();
        let newQuestion = {
            question: "",
            answers: [
                {
                    answer: "",
                    // attribute: ""
                },
                {
                    answer: "",
                    // attribute: ""
                }
            ]
        }
        this.setState({
            questions: [...this.state.questions, newQuestion]
        })
    }

    addAnswerBtn = (index) => (event) => {
        event.preventDefault();

        let questions = [...this.state.questions];
        
        let newAnswer = {
            answer: "",
            // attribute: ""
        }

        questions[index].answers = [...questions[index].answers, newAnswer]
        console.log(questions[index].answers)

        this.setState({
            questions
        })
       
    }

    questionHandleChange = (index) => (event) => {
        let questions = [...this.state.questions];
        questions[index].question = event.target.value;
        this.setState({
            questions
        }, () => { 
            console.log(this.state);
        })
    }

    answerHandleChange = (qIndex, aIndex) => (event) => {
        let questions = [...this.state.questions];
        questions[qIndex].answers[aIndex].answer = event.target.value;
        this.setState({
            questions
        }, () => { 
            console.log(this.state);
        })
    }

    attributeHandleChange = (qIndex, aIndex) => (event) => {
        let questions = [...this.state.questions];
        questions[qIndex].answers[aIndex].attribute = event.target.value;
        this.setState({
            questions
        }, () => { 
            console.log(this.state);
        })
    }

    titleHandleChange = () => (event) => {
        this.setState({
            quizTitle: event.target.value
        }, () => {
            console.log(this.state)
        })
    }

    handleSubmit = () => (event) => {
        //const { history } = this.props;
        let submitToServer = {
            username: this.state.username,
            quizTitle: this.state.quizTitle,
            quiz: "test",
            questions: this.state.questions
        }
        event.preventDefault();
        return fetch('http://localhost:3000/quizzes', {
            method: "post",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json",
                // "Access-Control-Allow-Headers": "Authorization",
                // "Accept": "application/json"
            },
            body: JSON.stringify(submitToServer)
        }).then((response) => {
            this.setState({
                username: this.props.loginReducer.name,
                formData: <div style={{ color: "black", marginBottom: "15px", textAlign: "center" }}>Submitted successfully🎉🎉🎉</div>,
                quizSubmitted: true,
                quizTitle: "",
                questions: [
                    {
                        question: "",
                        answers: [
                            {
                                answer: "",
                                // attribute: ""
                            },
                            {
                                answer: "",
                                // attribute: ""
                            }
                        ]
                    }
                ]
            }, () => {
                console.log(this.state)
            })
            response.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch((error) => {
            console.error('Error:', error);
          });
    }

    createNewQuiz = () => (event) => {
        event.preventDefault()
        this.setState({
            quizSubmitted: false,
        })
    }

    viewUniqueQuiz = (quizID) => (event) => {
        event.preventDefault()
        this.setState({
            viewQuizzes: false,
            currentQuiz: quizID
        })
    }

    viewAllQuizScores = () => (event) => {
        event.preventDefault()
        this.setState({
            viewQuizzes: true
        })
    }

    render() {
        const quizData = this.state.questions.map((quest, index) => {
            return (
                <div key={index}>
                    <div>
                        <small>put some catchy name for your quiz title</small>
                        <br/><br/>
                        <input onChange={this.questionHandleChange(index)} placeholder="Question"/>
                        <small>Ask something nice</small>
                        <br/><br/>
                    </div>
                    
                    {
                        quest.answers.map((answ, aindex) => {
                            return (
                                <div className="answers" key={aindex}> 
                                    <div>
                                        <input onChange={this.answerHandleChange(index, aindex)} placeholder="Answer"/>
                                    </div>
                                    {/* <div className="attribute">
                                        <div>
                                            <input onChange={this.attributeHandleChange(index, aindex)} placeholder="Answer Attribute"/>
                                        </div>
                                    </div> */}
                                </div>
                            )
                        })
                    }
                    <button className="addBtn" onClick={this.addAnswerBtn(index)}>Add Answer</button>
                </div>
            )
        })

        return(
            <div className="companyHome">
                <SubNav cwBtn={this.createQuizBtn} vwqBtn={this.viewCompletedQuizzesBtn}/>
                {
                    this.state.currentView === "createQuiz" ? 
                    <div className="createQuizContainer">
                        {
                            this.state.quizSubmitted === false ? 
                            <div className="createQuizInner">
                                <div>
                                    <div>
                                        <div>
                                            <h3>Create as many qustions and anwser as you like.</h3>
                                            <input onChange={this.titleHandleChange()} placeholder="Quiz Title"/>
                                    </div>
                                </div>
                                {quizData}
                                <button className="addBtn"  onClick={this.addQuestionBtn()}>Add Question</button>
                                </div>
                                <button onClick={this.handleSubmit()} className="submitBtn">Submit</button> 
                            </div>
                            :
                            <div className="createQuizInner">
                            {this.state.formData}
                                <div>
                                <button className="addBtn" onClick={this.createNewQuiz()}>Create a new quiz</button>
                                </div>
                            </div>
                        }
                        
                    </div>
                    :
                    <div>
                        <div className="allQuizzes">
                            {
                                !!this.state.viewQuizzes ?
                                    <div className="quizNames">
                                        <div className="selectQuiz">User's Results</div>
                                        {/*<QuizContainer quiz={uniqueQuizzes} />*/}
                                    </div>
                                :
                                    <QuizScores backBtn={this.viewAllQuizScores} currentQuiz={this.state.currentQuiz}/>
                            } 
                            
                        </div>
                    </div>
                }
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

export default connect(MSP, MDP)(CompanyHome);