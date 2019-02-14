import React, { Component } from 'react'
import SideNav from './SideNav';
import AddMemberOrg from './AddMemberOrg'
import DeleteMemberOrg from './DeleteMemberOrg'
import DeleteMemberGroup from './DeleteMemberGroup';
import AddNewGroup from './AddNewGroup'
import AddMemberGroup from './AddMemberGroup'

import '../../componentCSS/organisationPanel.css';
export default class OragnisationPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      orgGroups: []
    }
  }
  componentWillUnmount(){
    this.props.closeSideNav();
  }
  componentDidMount(){
    fetch('http://localhost:4000/groups/5c64dfc5ca90d807445d8dd7')
    .then(res => res.json())
    .then((data)=>{
      this.setState({
        orgGroups: data,
      })
    })
  }
  render() {
    console.log(this.state.orgGroups)
    const section = this.props.match ? this.props.match.params.section : null ;
    let sectionComponent = null;
    switch (section) {
      case 'people':
        sectionComponent= (
          <>
            <AddMemberOrg />
            <hr />
            <DeleteMemberOrg />
          </>
        )
        break;
      case 'groups':
        sectionComponent= (
          <>
          <AddNewGroup orgGroups={this.state.orgGroups} />
          <AddMemberGroup />
          <DeleteMemberGroup />
          </>
        )
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
