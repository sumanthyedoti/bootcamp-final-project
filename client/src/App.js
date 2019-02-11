import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header.jsx";
import Login from "./components/Login/Login.jsx";
import Home from "./components/Home/Home.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <>
            <Header />
            <Switch>
              <Route path="/" component={Login} exact />
              <Route path="/login" component={Login} exact />
              <Route path="/home" component={Home} exact />
            </Switch>
          </>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
