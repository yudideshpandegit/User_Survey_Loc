import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PersonalData from "./screens/PersonalData";
import Page2 from "./screens/Page2";
import Report from "./screens/Report";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={PersonalData} exact />
          <Route path="/report" component={Report} />
          <Route path="/page2" component={Page2} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
