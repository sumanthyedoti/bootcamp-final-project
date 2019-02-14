import React, { Component } from 'react'
import SideNav from './SideNav';
import AddMemberOrg from './AddMemberOrg'
import DeleteMemberOrg from './DeleteMemberOrg'
import DeleteMemberGroup from './DeleteMemberGroup';
import AddNewGroup from './AddNewGroup'
import AddMemberGroup from './AddMemberGroup'
import '../../componentCSS/organisationPanel.css';
import PlaceIcon from "@material-ui/icons/Place";
import PeopleIcon from "@material-ui/icons/People";
import InfoIcon from "@material-ui/icons/Info";

const styles = {
  orgCardIcon: {
   color: 'hsl(220, 23%, 31%)',
  },
};

export function OrgGroups(props) {
  let groupsList = null
  if(props.orgGroups){
    groupsList = props.orgGroups.map((grp) => {
      console.log(grp)
      return (<div className='grp-card'>{grp.name}</div>)
    })
  }
  return (
    <div className='org-groups-list'>
      {groupsList}
    </div>
  )
}


export default class OragnisationPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      org: null, //{}
      orgGroups: []
    }
  }
  componentWillUnmount(){
    this.props.closeSideNav();
  }
  componentDidMount(){
    fetch('http://localhost:4000/auth/organization/5c64dfc5ca90d807445d8dd7')
    .then(res => res.json())
    .then((data)=>{
      this.setState({
        org: data,
      })
      localStorage.setItem('org', JSON.stringify(data));
    })
    fetch('http://localhost:4000/groups/5c64dfc5ca90d807445d8dd7')
    .then(res => res.json())
    .then((data)=>{
      this.setState({
        orgGroups: data,
      })
    })
  }
  render() {
    const {org}  = this.state;
    const section = this.props.match ? this.props.match.params.section : null ;
    let sectionComponent = null;
    switch (section) {
      case 'people':
        sectionComponent= (
          <>
            <AddMemberOrg />
            {org? <DeleteMemberOrg orgId = {org._id}/>: null}
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
        sectionComponent= (
          <>
          {org ? 
          (<div className='org-profile-card'>
            <h2 className='org-title'>{org.name}</h2>
            <div className='org-info'>
              <p className='org-about org-info-item'>
                <InfoIcon
                  style={styles.orgCardIcon}
                  className="org-card-icon"
                  color="action"
                />
                <p>{org.about}</p>
              </p>
              <p className='org-address org-info-item'>
                <PlaceIcon
                  style={styles.orgCardIcon}
                  className="org-card-icon"
                  color="action"
                />
                <p>{org.address}</p>
              </p>
              <p className='org-size org-info-item'>
                <PeopleIcon
                  style={styles.orgCardIcon}
                  className="org-card-icon"
                  color="action"
                />
                <p>{org.members.length}</p>
              </p>
            </div>

          </div>)
          :
          null
          }
          <OrgGroups orgGroups={this.state.orgGroups} />
          </>
        )
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
