import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Card } from "@material-ui/core";
import { Balance } from "../components/Balance/Balance";
import styles from "./Dashboard.module.css";
import { IStateStore } from "../store";

const getBalance = createSelector(
  (stateStore: IStateStore) => stateStore,
  stateStore => stateStore.app.balance
);

export const Dashboard: React.FC = () => {
  const balance = useSelector(getBalance);

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.widgetContainer}>
        <Balance balance={balance} />
        <br />
        <Card>Send</Card>
      </div>
      <div className={styles.graphContainer}>
        <Card>Graph</Card>
      </div>
    </div>
  );
};
