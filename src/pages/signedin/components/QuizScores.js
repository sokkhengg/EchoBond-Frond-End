import React, { Component } from 'react'

class QuizScores extends Component {
    constructor(props){
        super()
        this.state={
            currentQuiz: props.currentQuiz,
            quizScores: []
        }
        
    }

    componentDidMount() {
        return fetch(`http://localhost:3000/${this.state.currentQuiz}`, {
            method: "get",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json",
                // "Access-Control-Allow-Headers": "Authorization",
                // "Accept": "application/json"
            }
        }).then((response) => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                quizScores: data
            })
        })
        .catch((error) => {
            console.error('Error:', error);
          });
    }

    render() {
        const allScores = Object.entries(this.state.quizScores).map(([keys, value])=>{
            return (
                <div className="quizLinks" key={keys}>
                
                {
                    Object.entries(value).map(([scoreKey, scoreValue]) => {
                        return (
                            <div key={scoreKey}>
                            {
                                scoreKey === "user_id" ? 
                                (<div>{scoreValue.name}:</div>)
                                :
                                (<div>{scoreKey}: {scoreValue}</div>)
                            }
                            </div>
                        )
                    })
                }
                
                </div>
            );
          })
        

        return(
            <div className="quizNames">
                <div className="selectQuiz">Test</div>
                <div className="quizLinks">
                {allScores}
                <button className="addBtn" onClick={this.props.backBtn()}>Back</button>
                </div>
            </div>
        )
    }
}

export default QuizScores;