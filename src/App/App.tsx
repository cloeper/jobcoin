import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import styles from "./App.module.css";
import { Login } from "../Login/Login";
import { store } from "../store";
import { Dashboard } from "../Dashboard/Dashboard";
import { browserHistory } from "../browserHistory";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className={styles.appContainer}>
        <Router history={browserHistory}>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Redirect strict from="/" to="/login" />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
