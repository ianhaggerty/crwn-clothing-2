import React, { Component } from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/hats" component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
