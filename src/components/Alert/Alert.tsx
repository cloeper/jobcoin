import React from "react";
import { Snackbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

export enum AlertTypes {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR"
}

interface IAlertProps {
  alertType: AlertTypes;
  message: string;
  isOpen: boolean;
}

const useStyles = makeStyles((theme: any) => ({
  SUCCESS: {
    backgroundColor: green[600]
  },
  ERROR: {
    backgroundColor: theme.palette.error.dark
  }
}));

export const Alert: React.FC<IAlertProps> = props => {
  const classes = useStyles();

  return (
    <Snackbar
      message={props.message}
      open={props.isOpen}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      autoHideDuration={6000}
      ContentProps={{
        className: classes[props.alertType]
      }}
    />
  );
};
