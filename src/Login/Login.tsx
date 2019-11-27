import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button
} from "@material-ui/core";
import styles from "./Login.module.css";
import { appActions } from "../App/App.actions";

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [jobcoinAddress, setJobcoinAddress] = useState("");
  return (
    <Container maxWidth="sm" className={styles.loginContainer}>
      <Card>
        <CardHeader
          className={styles.loginHeader}
          title="Welcome to Jobcoin!"
          subheader="Sign in with your Jobcoin Address"
        />
        <CardContent className={styles.loginFormContainer}>
          <div className={styles.loginForm}>
            <TextField
              label="Jobcoin Address"
              placeholder="Jobcoin Address"
              onChange={event => setJobcoinAddress(event.target.value)}
            />
            <Button
              variant="contained"
              className={styles.signInButton}
              color="primary"
              onClick={() =>
                dispatch(appActions.setLoggedInAddress(jobcoinAddress))
              }
            >
              Sign In
            </Button>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};
