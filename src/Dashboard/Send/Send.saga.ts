import { takeLatest, put } from "redux-saga/effects";
import { SendActions } from "./Send.actions";
import { appActions } from "../../App/App.actions";

function* sendJobcoin(action: any) {
  console.log("SENDING JOBCOIN", action);

  const fromAddress = action.payload.fromAddress;
  const toAddress = action.payload.toAddress;
  const amount = action.payload.amount;

  const response = yield fetch(
    `http://jobcoin.gemini.com/sneeze-amicably/api/transactions?fromAddress=${fromAddress}&toAddress=${toAddress}&amount=${amount}`,
    {
      method: "POST"
    }
  ).then(response => response.json());

  console.log("SEND RES", response);

  if (response.status == "OK") {
    yield put(appActions.fetchAllTransactions());
  }
}

export function* sendSaga() {
  yield takeLatest(SendActions.SEND_JOBCOIN, sendJobcoin);
}
