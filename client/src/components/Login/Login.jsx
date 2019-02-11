import React, { Component } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import "../../componentCSS/login.css";
class Login extends Component {
  state = {
    toggle: "signin"
  };

  onClickSignin = () => {
    let newState = { ...this.state };
    return this.setState({
      newState,
      toggle: "signin"
    });
  };
  onClickSignup = () => {
    let newState = { ...this.state };
    return this.setState({
      newState,
      toggle: "signup"
    });
  };
  render() {
    console.log(this.state.toggle);
    return (
      <section className="login-background">
        <div className="login">
          <div className="singin-signup-div">
            <div className="sigin-div" onClick={this.onClickSignin}>
              Signin
            </div>
            <div onClick={this.onClickSignup}>Signup</div>
          </div>
        </div>
        {this.state.toggle === "signin" ? <Signin /> : <Signup />}
      </section>
    );
  }
}

export default Login;
