import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../../componentCSS/workspace.css'
import SideDiv from '../SideDiv';
export default class Notifications extends Component {
  constructor(props){
    super(props);
    this.state = {
      groups: [],
    }
  }
  componentDidMount(){
    const user = JSON.parse(localStorage.getItem('user'));
    
  }
  render() {
    console.log(this.state.groups)
    return (
      <div className='container workspace'>

        <div className='main-div workspace__main-div section'>
          
        </div>
        <SideDiv />
      </div>
    )
  }
}
