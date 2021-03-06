import { takeLatest, put } from "redux-saga/effects";
import { appActions, AppActions } from "./App.actions";
import { browserHistory } from "../browserHistory";

function* fetchTransactionsForUser(action: any) {
  const address = action.payload.jobcoinAddress;

  const data = yield fetch(
    `http://jobcoin.gemini.com/sneeze-amicably/api/addresses/${address}`,
    {
      method: "GET"
    }
  ).then(response => response.json());

  yield put(appActions.setLoggedInAddress(address));
  yield put(appActions.setBalance(data.balance));
  yield put(appActions.setTransactions(data.transactions));
  browserHistory.push("/dashboard");
}

export function* appSaga() {
  yield takeLatest(
    AppActions.FETCH_TRANSACTIONS_FOR_USER,
    fetchTransactionsForUser
  );
}
