import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import RegistrationForm from './registration_form'
import '../../componentCSS/workspace.css'

export default class Workspace extends Component {
  render() {
    return (
      <div className='container workspace'>

        <div className='main-div workspace__main-div section'>
        <div>
          <RegistrationForm />
        </div>
        <Link to="/organisation-panel" className=''>
          {'go to org'}
        </Link>
        </div>

        <div className='side-div section'>
          <h3 className='side-title'>Recommended for you</h3>
        </div>
      </div>
    )
  }
}

