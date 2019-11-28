import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Card } from "@material-ui/core";
import { Balance } from "../components/Balance/Balance";
import styles from "./Dashboard.module.css";
import { IStateStore } from "../store";
import { ResponsiveLine } from "@nivo/line";
import { SendForm } from "../components/SendForm/SendForm";

const getBalance = createSelector(
  (stateStore: IStateStore) => stateStore,
  stateStore => stateStore.app.balance
);

const getTransactions = createSelector(
  (stateStore: IStateStore) => stateStore,
  stateStore => stateStore.app.transactions
);

export const Dashboard: React.FC = () => {
  const balance = useSelector(getBalance);
  const transactions = useSelector(getTransactions);

  console.log("transactions", transactions);

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.widgetContainer}>
        <Balance balance={balance} />
        <br />
        <SendForm />
      </div>
      <div className={styles.graphContainer}>
        <Card style={{ height: "100%" }}>
          <ResponsiveLine
            data={[
              {
                id: "Transactions",
                data: transactions.map(transaction => ({
                  x: transaction.timestamp,
                  y: transaction.amount
                })) as any
              }
            ]}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{ type: "linear", stacked: true, min: 0, max: "auto" }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Transactions over Time",
              legendOffset: 36,
              legendPosition: "middle"
            }}
            axisLeft={{
              orient: "left",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Balance",
              legendOffset: -40,
              legendPosition: "middle"
            }}
            colors={{ scheme: "dark2" }}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh={true}
          />
        </Card>
      </div>
    </div>
  );
};
