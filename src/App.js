import { connect } from 'react-redux';
import {HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Chat from './pages/Chat'

//<Router basename={process.env.PUBLIC_URL}> for deployment

function App(props) {

  return (
    <div className="App">
      <Router>
        <Switch>
        <>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/signup"} component={Signup} />
          <Route exact path={"/signin"} component={Login} />
          <Route exact path={"/chat"} component={Chat} />
        </>
        </Switch>
      </Router>
    </div>
  );
}

const MSP = (globalState) => {
  //debugger
  //console.log('FROM APP', globalState)
  return globalState
}

export default connect(MSP)(App);
