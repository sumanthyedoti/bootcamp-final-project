import React, { Component } from 'react'
import {NavLink, Link} from 'react-router-dom';
import '../../componentCSS/organisationPanel.css';
export default class OragnisationPanel extends Component {
  componentWillUnmount(){
    this.props.closeSideNav();
  }
  render() {
    return (
      <div className='container org'>
        <div className='side-nav'>
          <ul>
            <li>
              <NavLink to="/" className=''>
                {'Manage People'}
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className=''>
                {'Manage Groups'}
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className=''>
                {'Manage Events'}
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className=''>
                {'Manage Requests'}
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='side-nav-div'>
        <ul>
          <li>
            <NavLink to="/" className=''>
              {'Manage People'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className=''>
              {'Manage Groups'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className=''>
              {'Manage Events'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className=''>
              {'Manage Requests'}
            </NavLink>
          </li>
        </ul>
        </div>

        <div className='main-panel org__main-div'>
        <p>org panel</p>
        </div>
      </div>
    )
  }
}
