import React from "react";
import { Card } from "@material-ui/core";
import { ResponsiveLine } from "@nivo/line";
import { ITransaction } from "../../App/App.reducer";
import { List } from "immutable";

interface IHistoryProps {
  transactions: List<ITransaction>;
}

export const History: React.FC<IHistoryProps> = props => {
  return (
    <Card style={{ height: "100%" }}>
      <ResponsiveLine
        data={[
          {
            id: "Transactions",
            data: props.transactions.toJS().map(transaction => {
              console.log("TRANS", transaction);

              return {
                x: transaction.timestamp,
                y: transaction.amount
              };
            }) as any
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
        colors={{ scheme: "nivo" }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
      />
    </Card>
  );
};
