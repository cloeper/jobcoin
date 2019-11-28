import { SendActions } from "../Dashboard/Send.actions";
import { Record, List } from "immutable";

interface ITransactions {
  timestamp: string;
  toAddress: string;
  amount: string;
}

interface ISendState {
  transactions: List<ITransactions>;
}

const sendStateInitialRecord = Record<ISendState>({
  transactions: List()
});

export function sendReducer(
  state = sendStateInitialRecord(),
  action: { type: string; payload: any }
) {
  switch (action.type) {
    // case SendActions.SEND_JOBCOIN:
    //   const destination = action.payload.destination;
    //   const amount = action.payload.amount;
    //   return state.set(
    //     "transactions",
    //     state.transactions.push({ destination, amount })
    //   );
    default:
      return state;
  }
}
