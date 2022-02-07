import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home({user}) {
    return (
        <div className="App">
            <img
                    className="user-child"
                    src="yuc1.png"
                    alt="profile pic"
                    height="350px"
                  />
            {/* <div className="welcome">
                <p>{user.username}, welcome to your National Park Planner!</p>
            </div> */}
                <div className="begin-exploring">
                    <div className="overlay-text">
                        <h1>Welcome</h1>
                    </div>
                </div>
            <Link to="/register">
                <div className="begin-exploring">
                    <div className="overlay-text">
                        <p>Register to see companies</p>
                    </div>
                </div>
            </Link>
                <div className="begin-exploring">
                    <div className="overlay-text">
                        <p>Explore and leave review or rating for companies.</p>
                    </div>
                </div>
        </div>
    )
}


export default Home;