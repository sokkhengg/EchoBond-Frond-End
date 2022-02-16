import { connect } from 'react-redux';
import {HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Chat from './pages/Chat'

// using router v5
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

/**
 * Returns the global state object.
 */
const MSP = (globalState) => {
  //debugger
  //console.log('FROM APP', globalState)
  return globalState
}

/**
 * The main component of the app.  This component is connected to the Redux store.  It is also
 * the entry point for the app.  
 */
export default connect(MSP)(App);
