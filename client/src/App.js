import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Feed from "./pages/Feed";
import UserProfile from "./pages/UserProfile";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Home" component={Feed} />
        <Route exact path="/Profile/:email" component={UserProfile} />
      </Switch>
    </div>
  </Router>;

export default App;
