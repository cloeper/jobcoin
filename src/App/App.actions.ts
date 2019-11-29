import { ITransaction } from "./App.reducer";

export enum AppActions {
  FETCH_TRANSACTIONS_FOR_USER = "FETCH_TRANSACTIONS_FOR_USER",
  FETCH_ALL_TRANSACTIONS = "FETCH_ALL_TRANSACTIONS",
  SET_LOGGED_IN_ADDRESS = "SET_LOGGED_IN_ADDRESS",
  SET_BALANCE = "SET_BALANCE",
  SET_TRANSACTIONS = "SET_TRANSACTIONS"
}

export const appActions = {
  setLoggedInAddress: (jobcoinAddress: string) => ({
    type: AppActions.SET_LOGGED_IN_ADDRESS,
    payload: {
      jobcoinAddress
    }
  }),
  fetchTransactionsForUser: (jobcoinAddress: string) => ({
    type: AppActions.FETCH_TRANSACTIONS_FOR_USER,
    payload: {
      jobcoinAddress
    }
  }),
  setTransactions: (transactions: ITransaction[]) => ({
    type: AppActions.SET_TRANSACTIONS,
    payload: {
      transactions
    }
  }),
  setBalance: (balance: string) => ({
    type: AppActions.SET_BALANCE,
    payload: {
      balance
    }
  })
};
