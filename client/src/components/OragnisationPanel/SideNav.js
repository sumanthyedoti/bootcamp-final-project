import React from 'react'
import {NavLink, Link} from 'react-router-dom';

const styles = {
  activeNav: {
    color: 'black',
    padding: '8px 12px',
    background: '#ddd',
    width: '100%',
  }
}

export default function SideNav(props) {
  return (
    <>
      <div className='side-nav'>
          <ul>
            <li>
              <NavLink to="/organisation-panel"  activeStyle={{color: 'hsl(249, 53%, 46%)'}} className=''>
                {'Organisation Profile'}
              </NavLink>
            </li>
            <li>
              <NavLink to="/organisation-panel/people" activeStyle={styles.activeNav} className=''>
                {'Manage People'}
              </NavLink>
            </li>
            <li>
              <NavLink to="/organisation-panel/groups" activeStyle={styles.activeNav} className=''>
                {'Manage Groups'}
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/organisation-panel/events" activeStyle={styles.activeNav} className=''>
                {'Manage Events'}
              </NavLink>
            </li> */}
          </ul>
        </div>

        <div className='side-nav-div'>
        <ul>
          <li>
            <NavLink to="/organisation-panel" onClick={props.showSideNavHandler} activeStyle={{color: 'hsl(249, 53%, 46%)'}} className=''>
              {'Organisation Profile'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/organisation-panel/people" onClick={props.showSideNavHandler} activeStyle={styles.activeNav} className=''>
              {'Manage People'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/organisation-panel/groups" onClick={props.showSideNavHandler}  activeStyle={styles.activeNav} className=''>
              {'Manage Groups'}
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/organisation-panel/events" onClick={props.showSideNavHandler}  activeStyle={styles.activeNav} className=''>
              {'Manage Events'}
            </NavLink>
          </li> */}
        </ul>
        </div>
    </>
  )
}
