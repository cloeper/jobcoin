import { takeLatest, put } from "redux-saga/effects";
import { SendActions, sendActions, SendStatus } from "./Send.actions";
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

  if (response.status === "OK") {
    yield put(
      sendActions.setSendStatus(
        SendStatus.SUCCESS,
        `${amount} Jobcoins sent to ${toAddress}`
      )
    );
    yield put(appActions.fetchTransactionsForUser(fromAddress));
  } else if (response.error) {
    yield put(
      sendActions.setSendStatus(
        SendStatus.ERROR,
        `Error! Cannot send jobcoin(s). ${response.error}`
      )
    );
  }
}

export function* sendSaga() {
  yield takeLatest(SendActions.SEND_JOBCOIN, sendJobcoin);
}
