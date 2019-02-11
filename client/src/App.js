import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header.jsx'
import Login from './components/Login/Login.jsx'
import Home from './components/Home/Home.js'
import Workspace from './components/Workspace/Workspace'
import OragnisationPanel from './components/OragnisationPanel/OragnisationPanel'
import GroupPanel from './components/GroupPanel'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSideNavOpen: false,
    }
  }
  closeSideNav=()=>{
    this.setState((state)=>({
      isSideNavOpen: false,
    }));
  }
  showSideNavHandler=()=>{
    const sideNav = document.getElementsByClassName('side-nav-div')[0];
    if(this.state.isSideNavOpen){
      sideNav.style.animationName = 'side-nav-div-close';
      this.setState((state)=>({
        isSideNavOpen: !state.isSideNavOpen
      }));
    } else {
      sideNav.style.animationName = 'side-nav-div-open';
      this.setState((state)=>({
        isSideNavOpen: !state.isSideNavOpen
      }));
    }
  }
  render() {
    return (
      <>
      <BrowserRouter>
        <>
        <Header
          isSideNavOpen={this.state.isSideNavOpen}
          showSideNavHandler={this.showSideNavHandler} 
        />
        <Switch>
        <Route path='/' component={Login} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/home' component={Home} exact />
          <Route path='/workspace' component={Workspace} exact />
          <Route path='/organisation-panel'
           render={
            () => {
              return (<OragnisationPanel closeSideNav={this.closeSideNav} />);
            }
          }
          exact strict/>
          <Route path='/group-panel'
           render={
            () => {
              return (<GroupPanel closeSideNav={this.closeSideNav} />);
            }
          }
          exact strict/>
        </Switch>
        </>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
