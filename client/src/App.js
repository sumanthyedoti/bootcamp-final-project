import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header.jsx'
import Login from './components/Login/Login.jsx'
import Home from './components/Home/Home.js'
import Workspace from './components/Workspace/Workspace'
import OragnisationPanel from './components/OragnisationPanel/OragnisationPanel'
import GroupPanel from './components/GroupPanel'
import Profile from './components/Home/profileCard'
// import Tabs from './components/OragnisationPanel/tabs'
import TabsK from './components/OragnisationPanel/dailogTab';

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
          <Route path='/profile' component={Profile} exact />
          <Route path='/TabsK' component={TabsK} exact />
          <Route path='/organisation-panel'
           render={
            () => {
              return (<OragnisationPanel showSideNavHandler={this.showSideNavHandler} closeSideNav={this.closeSideNav} />);
            }
          }
          exact/>
          <Route path='/organisation-panel/:section'
           render={
            (props) => {
              return (
                <OragnisationPanel {...props} 
                closeSideNav={this.closeSideNav} 
                showSideNavHandler={this.showSideNavHandler} 
              />);
            }
          }
          exact />
          <Route path='/group-panel'
           render={
            () => {
              return (<GroupPanel showSideNavHandler={this.showSideNavHandler}  closeSideNav={this.closeSideNav} />);
            }
          }
          exact strict/>
          <Route path='/group-panel/:section'
           render={
            (props) => {
              return (
                <GroupPanel {...props} 
                closeSideNav={this.closeSideNav} 
                showSideNavHandler={this.showSideNavHandler} 
              />);
            }
          }
          exact />
        </Switch>
        </>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
