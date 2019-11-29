import React from "react";
import {
  TextField,
  Button,
  Card,
  CardHeader,
  CardContent
} from "@material-ui/core";
import styles from "./SendForm.module.css";

export const SendForm: React.FC = () => {
  const onSubmit = (event: any) => {
    event.preventDefault();
    //TODO send action here
  };

  return (
    <Card>
      <CardHeader title="Send Jobcoin" className={styles.sendFormHeader} />
      <CardContent>
        <form onSubmit={onSubmit} className={styles.sendForm}>
          <TextField
            label="Destiantion Address"
            placeholder="Destiantion Address"
          />
          <TextField label="Amount" placeholder="Amount" type="number" />
          <Button variant="contained" color="primary" onClick={onSubmit}>
            Sign In
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
