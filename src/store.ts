import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { sendReducer } from "./Send/Send.reducer";
import { appReducer, IAppState } from "./App/App.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export interface IStateStore {
  app: IAppState;
  send: any;
}

const rootReducer = combineReducers({ app: appReducer, send: sendReducer });

export const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(sagaMiddleware), composeWithDevTools())
);

sagaMiddleware.run(rootSaga);
