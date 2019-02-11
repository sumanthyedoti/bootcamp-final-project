import React from "react";
import "../componentCSS/header.css";
import HomeIcon from "@material-ui/icons/Home";
import InboxIcon from "@material-ui/icons/Inbox";
// // import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";

const styles = {
  navIcon: {
    fontSize: "40px",
    margin: "10px",
    padding: 0,
    color: "whitesmoke"
  }
};

export default function Header(props) {
  const location = window.location.href.split("/");
  return (
    <div className="header">
      <div className="container header-container">
        <div className="logo">
          <span className="logo__title">Collab-G</span>
        </div>
        {location[location.length - 1] === "" ||
        location[location.length - 1] === "login" ? null : (
          <div className="nav-div">
            <div className="nav-icons">
              <HomeIcon
                style={styles.navIcon}
                className="nav-icon"
                color="primary"
              />
              <img id="work-icon" src="./images/work.png" />
              <InboxIcon
                style={styles.navIcon}
                className="nav-icon"
                color="primary"
              />

              <PersonIcon
                style={styles.navIcon}
                className="nav-icon"
                color="primary"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
