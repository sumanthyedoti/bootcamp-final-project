import React, { Component } from 'react'
import SideNav from './SideNav';
import '../../componentCSS/organisationPanel.css';
export default class OragnisationPanel extends Component {
  componentWillUnmount(){
    this.props.closeSideNav();
  }
  componentDidMount(){

  }
  render() {
    const section = this.props.match ? this.props.match.params.section : null ;
    let sectionComponent = null;
    switch (section) {
      case 'people':
        sectionComponent= 'ppl component';
        break;
      case 'groups':
        sectionComponent= 'grp component';
        break;
      case 'events':
        sectionComponent= 'event component';
        break;
      default:
        break;
    }
    return (
      <div className='container org'>
        <SideNav showSideNavHandler = {this.props.showSideNavHandler}  />  

        <div className='main-panel org__main-div'>
        <p>{sectionComponent}</p>
        
        </div>
      </div>
    )
  }
}
