import React, { useState, FormEvent } from "react";
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

  const onSubmit = (event: any) => {
    event.preventDefault();

    if (jobcoinAddress.length > 0)
      dispatch(appActions.fetchTransactions(jobcoinAddress));
  };

  return (
    <Container maxWidth="sm" className={styles.loginContainer}>
      <Card>
        <CardHeader
          className={styles.loginHeader}
          title="Welcome to Jobcoin!"
          subheader="Sign in with your Jobcoin Address"
        />
        <CardContent className={styles.loginFormContainer}>
          <form className={styles.loginForm} onSubmit={onSubmit}>
            <TextField
              autoFocus={true}
              label="Jobcoin Address"
              placeholder="Jobcoin Address"
              onChange={event => setJobcoinAddress(event.target.value)}
            />
            <Button
              disabled={jobcoinAddress.length === 0}
              variant="contained"
              color="primary"
              onClick={onSubmit}
            >
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};
