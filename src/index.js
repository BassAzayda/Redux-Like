import React from "react";
import ReactDOM from "react-dom";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import { StoreProvider, useStore } from "./store/useStore";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Navlink
} from "react-router-dom";

import Login from "./Login";

import "./styles.css";

function App() {
  return (
    <StoreProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
          </Switch>
        </div>
      </Router>
    </StoreProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
