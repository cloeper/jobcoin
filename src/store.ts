import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { appReducer, IAppState } from "./App/App.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";
import { sendReducer, ISendState } from "./Dashboard/Send/Send.reducer";

const sagaMiddleware = createSagaMiddleware();

export interface IStateStore {
  app: IAppState;
  send: ISendState;
}

const rootReducer = combineReducers({ app: appReducer, send: sendReducer });

export const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(sagaMiddleware), composeWithDevTools())
);

sagaMiddleware.run(rootSaga);
