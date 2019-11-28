import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import styles from "./Balance.module.css";

interface IBalance {
  balance: string;
}

export const Balance: React.FC<IBalance> = props => {
  return (
    <Card>
      <CardHeader className={styles.balanceHeader} title="Balance" />
      <CardContent>
        <Typography component="h1">৳{props.balance}</Typography>
      </CardContent>
    </Card>
  );
};
