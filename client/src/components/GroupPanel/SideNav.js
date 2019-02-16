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
            {/* <li>
              <NavLink to="/group-panel"  activeStyle={{color: 'hsl(249, 53%, 46%)'}} className=''>
                {'Group Profile'}
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/group-panel/tasks" activeStyle={styles.activeNav} className=''>
                {'Manage tasks'}
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/group-panel/events" activeStyle={styles.activeNav} className=''>
                {'Manage Events'}
              </NavLink>
            </li> */}
          </ul>
        </div>

        <div className='side-nav-div'>
        <ul>
          {/* <li>
            <NavLink to="/group-panel" onClick={props.showSideNavHandler} activeStyle={{color: 'hsl(249, 53%, 46%)'}} className=''>
              {'Group Profile'}
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/group-panel/tasks" onClick={props.showSideNavHandler}  activeStyle={styles.activeNav} className=''>
              {'Manage tasks'}
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/group-panel/events" onClick={props.showSideNavHandler}  activeStyle={styles.activeNav} className=''>
              {'Manage Events'}
            </NavLink>
          </li> */}
        </ul>
        </div>
    </>
  )
}
