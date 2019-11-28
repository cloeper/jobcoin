import React from "react";
import { Card } from "@material-ui/core";

import { Balance } from "../components/Balance/Balance";

import styles from "./Dashboard.module.css";

export const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.widgetContainer}>
        <Balance balance={"12.87"} />
        <br />
        <Card>Send</Card>
      </div>
      <div className={styles.graphContainer}>
        <Card>Graph</Card>
      </div>
    </div>
  );
};
