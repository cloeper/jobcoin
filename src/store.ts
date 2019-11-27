import { createStore, combineReducers } from "redux";
import { sendReducer } from "./Send/Send.reducer";
import { appReducer } from "./App/App.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import {} 

const rootReducer = combineReducers({ app: appReducer, send: sendReducer });

export const store = createStore(rootReducer, composeWithDevTools());
