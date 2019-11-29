import React from "react";
import styles from "./NavBar.module.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

interface INavBarProps {
  loggedInAddress: string;
}

export const NavBar: React.FC<INavBarProps> = props => {
  return (
    <div className={styles.navBar}>
      <Typography
        variant="subtitle1"
        component="p"
        className={styles.titleContainer}
      >
        Jobcoin Sender
      </Typography>
      <div className={styles.linkContainer}>
        {props.loggedInAddress || "Unknown"} logged in. | &nbsp;
        <Link to="/login" className={styles.logoutLink}>
          Logout
        </Link>
      </div>
    </div>
  );
};
