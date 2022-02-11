import './subnav.css';

const SubNav = ({cwBtn, vwqBtn}) => {
    return(
        <div className="subnav">
            <div className="subnavFlex">
                <a href="/" onClick={cwBtn()}>create a quiz</a>
                <div>|</div> 
                <a href="/" onClick={vwqBtn()}><div>{" "}completed quizzes</div></a>
            </div>
        </div>
    )
}

export default SubNav;