import { appSaga } from "./App/App.saga";
import { sendSaga } from "./Dashboard/Send/Send.saga";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([appSaga(), sendSaga()]);
}
