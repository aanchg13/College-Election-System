import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./component/Home";
import Voting from "./component/Voting/Voting";
import Results from "./component/Results/Results";
import Registration from "./component/Registration/Registration";
import AddCandidate from "./component/Admin/AddCandidate/AddCandidate";
import Verification from "./component/Admin/Verification/Verification";
import test from "./component/test";
import Signin from "./component/Signin";
import Verify from "./component/Verify";
import bgimg from "./image/Ballotlogo.JPG"

import "./App.css";


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className= "wrapper" >
         <img src={bgimg}></img>
        <Router>
          <Switch>
            <Route exact path="/" component={Signin} />
            <Route exact path="/Verify" component={Verify} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/AddCandidate" component={AddCandidate} />
            <Route exact path="/Voting" component={Voting} />
            <Route exact path="/Results" component={Results} />
            <Route exact path="/Registration" component={Registration} />
            <Route exact path="/Verification" component={Verification} />
            <Route exact path="/test" component={test} />
          </Switch>
        </Router>
        </div>
      </div>
    );
  }
}

