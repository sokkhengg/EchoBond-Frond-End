import './userquiz.css';

const QuizContainer = (props) => {
    return(
        <div className="quizCenter">
            <div className="innerCenter">
                {props.quiz}
            </div>
        </div>
    )
}

export default QuizContainer;