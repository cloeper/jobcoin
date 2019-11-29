import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Balance } from "../components/Balance/Balance";
import styles from "./Dashboard.module.css";
import { IStateStore } from "../store";
import { SendForm } from "../components/SendForm/SendForm";
import { History } from "../components/History/History";
import { SendStatus } from "./Send/Send.actions";
import { Alert, AlertTypes } from "../components/Alert/Alert";

const getBalance = createSelector(
  (stateStore: IStateStore) => stateStore,
  stateStore => stateStore.app.balance
);

const getLoggedInAddress = createSelector(
  (stateStore: IStateStore) => stateStore,
  stateStore => stateStore.app.loggedInAddress
);

const getTransactions = createSelector(
  (stateStore: IStateStore) => stateStore,
  stateStore => stateStore.app.transactions
);

const getSendState = createSelector(
  (stateStore: IStateStore) => stateStore,
  stateStore => stateStore.send
);

export const Dashboard: React.FC = () => {
  const balance = useSelector(getBalance);
  const transactions = useSelector(getTransactions);
  const loggedInAddress = useSelector(getLoggedInAddress);
  const sendState = useSelector(getSendState);

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.widgetContainer}>
        <Balance balance={balance} loggedInAddress={loggedInAddress} />
        <br />
        <SendForm />
      </div>
      <div className={styles.graphContainer}>
        <History transactions={transactions} />
      </div>
      <Alert
        message={sendState.message}
        alertType={
          sendState.sendStatus === SendStatus.SUCCESS
            ? AlertTypes.SUCCESS
            : AlertTypes.ERROR
        }
        isOpen={
          sendState.sendStatus === SendStatus.ERROR ||
          sendState.sendStatus === SendStatus.SUCCESS
        }
      />
    </div>
  );
};
