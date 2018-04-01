import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  </Router>;

export default App;
