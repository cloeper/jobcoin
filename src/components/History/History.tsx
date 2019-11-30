import React from "react";
import { Card } from "@material-ui/core";
import { ResponsiveLine } from "@nivo/line";
import { ITransaction } from "../../App/App.reducer";
import { List } from "immutable";
import { format } from "date-fns";

interface IHistoryProps {
  transactions: List<ITransaction>;
  loggedInAddress: string;
}

const calculateBalancePerTransaction = (
  transactions: List<ITransaction>,
  loggedInAddress: string
) => {
  transactions.reduce(
    (updatedTransactions: ITransaction[], transaction, index) => {
      // If it's the first record, the amount is the balance.
      if (index === 0) {
        transaction.balance = parseFloat(transaction.amount);
      }
      // If the fromAddress is the logged in address, they send jobcoins so subtract the amount
      else if (transaction.fromAddress === loggedInAddress) {
        transaction.balance =
          updatedTransactions[index - 1].balance -
          parseFloat(transaction.amount);
      }
      // If the fromAddress is the NOT logged in address, they receieved jobcoins so add the amount
      else if (transaction.fromAddress !== loggedInAddress) {
        transaction.balance =
          updatedTransactions[index - 1].balance +
          parseFloat(transaction.amount);
      }

      updatedTransactions.push(transaction);

      return updatedTransactions;
    },
    []
  );

  return transactions;
};

export const History: React.FC<IHistoryProps> = props => {
  const transactionsWithBalance = calculateBalancePerTransaction(
    props.transactions,
    props.loggedInAddress
  );

  return (
    <Card style={{ height: "100%" }}>
      <ResponsiveLine
        data={[
          {
            id: "Balance",
            data: transactionsWithBalance
              .map(transaction => {
                // This could have been done while reducing but it's harder to reason about.
                const formattedDate = format(
                  new Date(transaction.timestamp),
                  "MM-dd-yy HH:mm:ss:SSS" // We do this so the graph has enough granularity to display each transaction
                );

                return {
                  x: formattedDate,
                  y: transaction.balance.toFixed(2) // Because parseFloat is weird.
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
