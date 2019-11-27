import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import styles from "./App.module.css";
import { Send } from "../Send/Send";
import { Login } from "../Login/Login";
import { store } from "../store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className={styles.appContainer}>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/send">
              <Send />
            </Route>
            <Redirect strict from="/" to="/login" />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
