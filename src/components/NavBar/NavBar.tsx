import React from "react";
import styles from "./NavBar.module.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendActions, SendStatus } from "../../Dashboard/Send/Send.actions";

interface INavBarProps {
  loggedInAddress: string;
}

export const NavBar: React.FC<INavBarProps> = props => {
  const dispatch = useDispatch();

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
        <Link
          to="/login"
          className={styles.logoutLink}
          onClick={() =>
            dispatch(sendActions.setSendStatus(SendStatus.INIT, ""))
          }
        >
          Logout
        </Link>
      </div>
    </div>
  );
};
