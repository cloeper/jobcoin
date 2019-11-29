import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import styles from "./Balance.module.css";

interface IBalance {
  balance: string;
  loggedInAddress: string;
}

export const Balance: React.FC<IBalance> = props => {
  return (
    <Card>
      <CardHeader
        className={styles.balanceHeader}
        title={`Balance for ${props.loggedInAddress || "Unknown"}`}
      />
      <CardContent>
        <Typography variant="h3" component="h1">
          {props.balance || 0}
        </Typography>
      </CardContent>
    </Card>
  );
};
