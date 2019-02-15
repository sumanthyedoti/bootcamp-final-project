import React, { Component } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import { connect } from "react-redux";
import "../../componentCSS/login.css";
import { Redirect } from "react-router-dom";
import { signinAction } from "../../store/actions/userAction";
import ErrorPopup from "../error";
class Login extends Component {
  state = {
    toggle: "signin",
    isSignedIn: false,
    open: false,
    errorMessage:null
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onClickSignin = () => {
    let newState = { ...this.state };
    this.setState(state => ({
      newState,
      toggle: "signin",
      isSignedIn:!state.isSignedIn
    }));
  };
  onClickSignup = () => {
    let newState = { ...this.state };
    this.setState({
      newState,
      toggle: "signup"
    });
  };

  signinHandler = () => {
    const email = document.getElementById("filled-email-input");
    const pwd = document.getElementById("filled-password-input");
    this.props
      .signin(email.value, pwd.value)
      .then(data => {
        email.value = "";
        pwd.value = "";
        this.setState(state => ({
          isSignedIn: true
        }));
      })
      .catch(err => {
        console.log(err.message);
        const data = err.message
        this.setState({
          errorMessage:data
        })
        // this.signinError(data)
        // debugger;
        this.handleClickOpen();
        // return (
        //   <div>
        //    dfgghjhjjhj
        //     <ErrorPopup
        //       signinError={err.message}
        //       handleClose={this.handleClose}
        //       stateData={this.state.open}
        //     />
        //   </div>
        // );
      });
  };
  // signinError = (data)=>{
  //   console.log(data);
    
  //   return data
  // }
  render() {
    // console.log(this.signinError());
    if (this.state.isSignedIn === true) return <Redirect to="/home" />;
    return (
      <section className="login-background">
    
         <div className="login-text">
         <h1>
           Create , Develop , form and Collabrate.<br />
           <br />
           Manage your people in the    way you want! 
         </h1>
         </div>
       <div className="login-main">  <div className="login">
          <div className="singin-signup-div">
            <div className="sigin-div" onClick={this.onClickSignin}>
              Signin
            </div>
            <div onClick={this.onClickSignup}>Signup</div>
          </div>
        </div>
        {this.state.toggle === "signin" ? (
        <div>  <Signin signinHandler={this.signinHandler} />
          <ErrorPopup 
              errorMessage={this.state.errorMessage}
              handleClose={this.handleClose}
              stateData={this.state.open}
            /> </div>
        ) : (
          <Signup />
        )}</div>
      </section>
    );
  }
}
const mapStateToProps = state => {};
const mapActionsToProps = {
  signin: signinAction
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(Login);
