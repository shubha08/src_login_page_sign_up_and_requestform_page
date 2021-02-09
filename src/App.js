import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import reqform from "./components/reqform.component"

function App() {
  return (<Router>
    <div className="App">
      <header>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>VYAVAHAR</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Log in</Link>
                
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"request-form"}>RequestForm</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </header>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/Sign-up" component={SignUp} />
            <Route path="/request-form" component={reqform} />
           
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;