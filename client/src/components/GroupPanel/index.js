import React, { Component } from 'react'
import {NavLink, Link} from 'react-router-dom';
import SideNav from './SideNav';
import '../../componentCSS/groupPanel.css';

export default class GroupPanel extends Component {
  componentWillUnmount(){
    this.props.closeSideNav();
  }
  render() {
    const section = this.props.match ? this.props.match.params.section : null ;
    let sectionComponent = null;
    switch (section) {
      case 'people':
        sectionComponent= 'ppl component';
        break;
      case 'tasks':
        sectionComponent= 'task component';
        break;
      case 'events':
        sectionComponent= 'event component';
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
