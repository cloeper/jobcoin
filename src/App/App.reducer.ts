import { AppActions } from "./App.actions";
import { Record, List } from "immutable";

export interface ITransaction {
  timestamp: string;
  toAddress: string;
  fromAddress: string;
  amount: string;
  balance: number; // This is added during preprosessing for visualization
}

export interface IAppState {
  loggedInAddress: string;
  balance: string;
  transactions: List<ITransaction>;
}

const appStateInitialRecord = Record<IAppState>({
  loggedInAddress: "",
  balance: "",
  transactions: List()
});

export function appReducer(
  state = appStateInitialRecord(),
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case AppActions.SET_LOGGED_IN_ADDRESS:
      return state.set("loggedInAddress", action.payload.jobcoinAddress);
    case AppActions.SET_BALANCE:
      return state.set("balance", action.payload.balance);
    case AppActions.SET_TRANSACTIONS:
      return state.set("transactions", List(action.payload.transactions));
    default:
      return state;
  }
}
