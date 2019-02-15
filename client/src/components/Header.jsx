import React from "react";
import "../componentCSS/header.css";
import HomeIcon from "@material-ui/icons/Home";
import InboxIcon from "@material-ui/icons/Inbox";
import { NavLink, Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import workspaceIcon from "../images/work.png";

const styles = {
  navIcon: {
    fontSize: "40px",
    margin: "10px 10px 0 10px",
    padding: 0,
    color: "whitesmoke"
  },
  menuButton: {
    fontSize: "34px"
  },
  activeNav:{
    // paddingBottom: '10px',
    borderBottom: '4px solid whitesmoke',
    marginBottom: '6px',

  }
};

export default function Header(props) {
  let location = window.location.href.split("/");
  location =
    location[location.length - 1] === ""
      ? location[location.length - 2]
      : location[location.length - 1];
  return (
    <>
      <div className="header">
        {location === "organisation-panel" || 
        location === "group-panel" ||
        location === "people" ||
        location === "groups" ||
        location === "events" ||
        location === "tasks" ||
        location === "requests"
        ? (
          props.isSideNavOpen ? (
            <CloseIcon
              className="side-menu-button"
              style={styles.menuButton}
              onClick={props.showSideNavHandler}
            />
          ) : (
            <MenuIcon
              className="side-menu-button"
              style={styles.menuButton}
              onClick={props.showSideNavHandler}
            />
          )
        ) : null}
        <div className={location === "login" ? "container login-container" : "container header-container"}>
          <Link to="/home" className="">
            <div className="logo">
              <span className="logo__title">Collab-G</span>
            </div>
          </Link>
          {location === "login" ? null : (
            <div className="nav-div">
              <div className="nav-icons">
                <NavLink to="/home" className="" title='Home' activeStyle={styles.activeNav}>
                  <HomeIcon
                    style={styles.navIcon}
                    className="nav-icon"
                    color="primary"
                  />
                </NavLink>
                <NavLink to="/workspace" title='Worksapce' className="" activeStyle={styles.activeNav}>
                  <img
                    id="work-icon"
                    src={workspaceIcon}
                    alt="workspace icon"
                  />
                </NavLink>
                <NavLink to="/notifications" title='Notifications' className="" activeStyle={styles.activeNav}>
                  <InboxIcon
                    style={styles.navIcon}
                    className="nav-icon"
                    color="primary"
                  />
                </NavLink>
                <NavLink to="/profile" title='Profile' className="" activeStyle={styles.activeNav}>
                  <PersonIcon
                    style={styles.navIcon}
                    className="nav-icon"
                    color="primary"
                  />
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
