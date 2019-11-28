import { appSaga } from "./App/App.saga";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([appSaga()]);
}
