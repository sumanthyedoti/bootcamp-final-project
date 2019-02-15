import React, { Component } from 'react'
import SideNav from './SideNav';
import AddMemberOrg from './AddMemberOrg'
import DeleteMemberOrg from './DeleteMemberOrg'
import DeleteMemberGroup from './DeleteMemberGroup';
import AddNewGroup from './AddNewGroup'
import AddMemberGroup from './AddMemberGroup'
import AddEvent from './AddEvent'
import '../../componentCSS/organisationPanel.css';
import PlaceIcon from "@material-ui/icons/Place";
import PeopleIcon from "@material-ui/icons/People";
import InfoIcon from "@material-ui/icons/Info";
import SimpleTabs from './tabs';

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
      return (
        <>
        <div className='grp-card'>
        
        <div className='grp-card-section'>
            <div className='grp-card-sec-title'>
              Group
            </div>
            <div className='grp-card-sec-detail'>{grp.name}</div>
          </div>
          <div className='grp-card-section'>
            <div className='grp-card-sec-title'>
              Organisation
            </div>
            <div className='grp-card-sec-detail'>
              {grp.orgName}
            </div>
          </div>
          <div className='grp-card-section'>
            <div className='grp-card-sec-title'>
              Members
            </div>
            <div className='grp-card-sec-detail'>
              {grp.member.length}
            </div>
          </div>
        </div>
      </>
        )
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
      localStorage.setItem('orgGroups', JSON.stringify(data));
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
            {/* <AddMemberOrg />
            {org? <DeleteMemberOrg orgId = {org._id}/>: null} */}
            {org? <SimpleTabs orgId = {org._id}/>: null}
          </>
        )
        break;
      case 'groups':
        sectionComponent= (
          <>
          <AddNewGroup orgGroups={this.state.orgGroups} />
          {/* <AddMemberGroup />
          <DeleteMemberGroup /> */}
          </>
        )
        break;
      case 'events':
        sectionComponent= (
            <AddEvent  />
        );
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
              <p className='org-size org-info-item'>
                <strong style={styles.orgCardIcon}>ETD.</strong>
                <p className='etd'>{org.etdDate.substring(0,10)}</p>
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
