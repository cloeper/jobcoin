import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardHeader,
  CardContent
} from "@material-ui/core";
import styles from "./SendForm.module.css";
import { createSelector } from "reselect";
import { IStateStore } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { sendActions } from "../../Dashboard/Send/Send.actions";

const getCurrentAddress = createSelector(
  (stateStore: IStateStore) => stateStore,
  stateStore => stateStore.app.loggedInAddress
);

export const SendForm: React.FC = () => {
  const fromAddress = useSelector(getCurrentAddress);
  const dispatch = useDispatch();
  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (event: any) => {
    event.preventDefault();

    if (toAddress.length > 0 && amount.length > 0) {
      console.log("SENDING");

      dispatch(sendActions.sendJobcoin(fromAddress, toAddress, amount));
    }
  };

  return (
    <Card>
      <CardHeader title="Send Jobcoin" className={styles.sendFormHeader} />
      <CardContent>
        <form onSubmit={onSubmit} className={styles.sendForm}>
          <TextField
            label="Destiantion Address"
            placeholder="Destiantion Address"
            onChange={event => setToAddress(event.target.value)}
          />
          <TextField
            label="Amount"
            placeholder="Amount"
            onChange={event => setAmount(event.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={onSubmit}
            disabled={toAddress.length === 0 || amount.length === 0}
          >
            Send Jobcoins
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
