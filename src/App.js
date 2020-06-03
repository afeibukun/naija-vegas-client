import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/main.css";
import "./assets/css/custom.css";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
// import "./assets/scss/ads-style-react.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbars/navbar";
import HomePage from "./views";
import LoginPage from "./views/login";
import RegisterPage from "./views/register";

function App() {
  return (
    <div className="nv-app">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
