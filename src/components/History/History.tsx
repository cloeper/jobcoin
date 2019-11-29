import React from "react";
import { Card } from "@material-ui/core";
import { ResponsiveLine } from "@nivo/line";
import { ITransaction } from "../../App/App.reducer";
import { List } from "immutable";
import { format } from "date-fns";

interface IHistoryProps {
  transactions: List<ITransaction>;
}

export const History: React.FC<IHistoryProps> = props => {
  return (
    <Card style={{ height: "100%" }}>
      <ResponsiveLine
        data={[
          {
            id: "transactions",
            data: props.transactions
              .map(transaction => {
                const formattedDate = format(
                  new Date(transaction.timestamp),
                  "MM-dd-yy HH:mm:ss:SSS"
                );

                return {
                  x: formattedDate,
                  y: transaction.amount
                };
              })
              .toArray()
          }
        ]}
        margin={{ top: 25, right: 70, bottom: 125, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", stacked: true, min: 0, max: "auto" }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 45,
          legend: "Transaction Date",
          legendOffset: 100,
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
        curve="monotoneX"
        colors={{ scheme: "category10" }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        enablePointLabel={true}
        enableGridY={false}
        enableSlices={"x"}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
      />
    </Card>
  );
};
