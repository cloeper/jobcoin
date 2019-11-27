import { AppActions } from "./App.actions";
import { Record, List } from "immutable";

interface IAppState {
  loggedInAddress: string;
}

const appStateInitialRecord = Record<IAppState>({
  loggedInAddress: ""
});

export function appReducer(
  state = appStateInitialRecord(),
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case AppActions.SET_LOGGED_IN_ADDRESS:
      const jobcoinAddress = action.payload.jobcoinAddress;
      return state.set("loggedInAddress", jobcoinAddress);
    default:
      return state;
  }
}
