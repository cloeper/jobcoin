import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Balance } from "../components/Balance/Balance";
import styles from "./Dashboard.module.css";
import { IStateStore } from "../store";
import { SendForm } from "../components/SendForm/SendForm";
import { History } from "../components/History/History";

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

export const Dashboard: React.FC = () => {
  const balance = useSelector(getBalance);
  const transactions = useSelector(getTransactions);
  const loggedInAddress = useSelector(getLoggedInAddress);

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
    </div>
  );
};
