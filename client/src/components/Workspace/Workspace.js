import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import RegistrationForm from './registration_form'
import '../../componentCSS/workspace.css'
import SideDiv from '../SideDiv';
export default class Workspace extends Component {
  constructor(props){
    super(props);
    this.state = {
      groups: [],
    }
  }
  componentDidMount(){
    const user = JSON.parse(localStorage.getItem('user'));
    fetch(`http://localhost:4000/groups/user/${user.username}`)
    .then(res => res.json())
    .then((data)=>{
      console.log(data)
      this.setState({
        groups: data,
      })
      localStorage.setItem('userGroups', JSON.stringify(data));
    })
  }
  render() {
    console.log(this.state.groups)
    return (
      <div className='container workspace'>

        <div className='main-div workspace__main-div section'>
          <div>
            <RegistrationForm />
          </div>
          <div className='panel-btns'>
            <Link to="/organisation-panel" className='panel-btn'>
              {'go to org'}
            </Link> <br/>
            <Link to="/group-panel" className='panel-btn'>
              {'go to grp'}
            </Link>
          </div>
          <UserGroups userGroups = {this.state.groups} />
        </div>
        <SideDiv />
      </div>
    )
  }
}

export function UserGroups(props) {
  let groupsList = null
  if(props.userGroups){
    groupsList = props.userGroups.map((grp) => {
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