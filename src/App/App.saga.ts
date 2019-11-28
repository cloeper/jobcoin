import { takeLatest, put, takeEvery } from "redux-saga/effects";
import { appActions, AppActions } from "./App.actions";

function* fetchTransactions(
  action: any /*{ payload: { jobcoinAddress: string } }*/
) {
  const address = action.payload.jobcoinAddress;

  const data = yield fetch(
    `http://jobcoin.gemini.com/sneeze-amicably/api/addresses/${address}`,
    {
      method: "GET"
    }
  ).then(response => response.json());

  console.log(data);

  yield put(appActions.setLoggedInAddress(address));
  yield put(appActions.setBalance(data.balance));
  yield put(appActions.setTransactions(data.transactions));
}

export function* appSaga() {
  yield takeEvery(AppActions.FETCH_TRANSACTIONS, fetchTransactions);
}
