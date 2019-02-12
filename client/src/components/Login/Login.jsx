import React, { Component } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import {connect} from 'react-redux';
import "../../componentCSS/login.css";
import {Redirect} from 'react-router-dom';
import {signinAction} from '../../store/actions/userAction';
class Login extends Component {
  state = {
    toggle: "signin",
    isSignedIn: false,
  };

  onClickSignin = () => {
    let newState = { ...this.state };
    this.setState((state)=>({
      newState,
      toggle: "signin",
      isSignedIn: !state.isSignedIn,
    }));
  };
  onClickSignup = () => {
    let newState = { ...this.state };
    this.setState({
      newState,
      toggle: "signup"
    });
  };

  signinHandler=()=>{
    const email = document.getElementById('filled-email-input');
    const pwd = document.getElementById('filled-password-input');
    this.props.signin(email.value, pwd.value)
      .then(data => {
        email.value='';
        pwd.value='';
        this.setState((state)=>({
          isSignedIn: true
        }));
      })
      .catch(err => console.log(err.message))
  }
  render() {
    console.log(this.state)
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
        {this.state.toggle === "signin" ? 
        <Signin signinHandler={this.signinHandler} /> 
        : 
        <Signup />}
      </section>
    );
  }
}
const mapStateToProps=(state) =>{
  
}
const mapActionsToProps = ({
  signin: signinAction
})
export default connect(mapStateToProps, mapActionsToProps)(Login);
