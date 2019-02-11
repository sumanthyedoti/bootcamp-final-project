import React, { Component } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import "../../componentCSS/login.css";
import {Redirect} from 'react-router-dom'
class Login extends Component {
  state = {
    toggle: "signin",
    isSignedIn: false,
  };

  onClickSignin = () => {
    let newState = { ...this.state };
    this.setState({
      newState,
      toggle: "signin",
    });
  };
  onClickSignup = () => {
    let newState = { ...this.state };
    this.setState({
      newState,
      toggle: "signup"
    });
  };
  componentDidMount(){
    if(localStorage.getItem('user')){
      this.setState((state) => ({
        isSignedIn: !state.isSignedIn,
      }))
    }
  }
  render() {
    if(this.state.isSignedIn===true) return <Redirect to='/home' />
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
