import { takeLatest, put } from "redux-saga/effects";
import { SendActions } from "./Send.actions";
import { appActions } from "../../App/App.actions";

function* sendJobcoin(action: any) {
  const fromAddress = action.payload.fromAddress;
  const toAddress = action.payload.toAddress;
  const amount = action.payload.amount;

  const response = yield fetch(
    `http://jobcoin.gemini.com/sneeze-amicably/api/transactions`,
    {
      method: "POST",
      body: JSON.stringify({
        fromAddress,
        toAddress,
        amount
      })
    }
  ).then(response => response.json());

  console.log(response);
}

export function* sendSaga() {
  yield takeLatest(SendActions.SEND_JOBCOIN, sendJobcoin);
}
