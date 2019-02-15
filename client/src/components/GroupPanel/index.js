import React, { Component } from 'react'
import {NavLink, Link} from 'react-router-dom';
import SideNav from './SideNav';
import '../../componentCSS/groupPanel.css';
import ManageEvents from './ManageEvents'
import ManageTasks from './ManageTasks'

export default class GroupPanel extends Component {
  componentWillUnmount(){
    this.props.closeSideNav();
  }
  render() {
    const section = this.props.match ? this.props.match.params.section : null ;
    let sectionComponent = null;
    switch (section) {
      case 'tasks':
        sectionComponent= (
          <>
            <ManageTasks />
          </>
        );
        break;
      case 'events':
        sectionComponent= (
          <>
            <ManageEvents />
          </>
        );
        break;
      default:
        break;
    }
    return (
      <div className='container group'>
        <SideNav showSideNavHandler = {this.props.showSideNavHandler}  />

        <div className='main-panel group__main-div'>
        <p>{sectionComponent}</p>
        </div>
      </div>
    )
  }
}
