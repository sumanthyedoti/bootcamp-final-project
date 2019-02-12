import React, { Component } from 'react'
import {NavLink, Link} from 'react-router-dom';
import '../../componentCSS/groupPanel.css';

export default class GroupPanel extends Component {
  componentWillUnmount(){
    this.props.closeSideNav();
  }
  render() {
    return (
      <div className='container group'>
        <div className='side-nav'>
        <ul>
          <li>
            <NavLink to="/" className=''>
              {'Manage Tasks'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className=''>
              {'Manage Events'}
            </NavLink>
          </li>
        </ul>
        </div>

        <div className='side-nav-div'>
        <ul>
          <li>
            <NavLink to="/" className=''>
              {'Manage Tasks'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className=''>
              {'Manage Events'}
            </NavLink>
          </li>
        </ul>
        </div>

        <div className='main-panel group__main-div'>
        <p>group panel</p>
        </div>
      </div>
    )
  }
}
