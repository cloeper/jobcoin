export enum AppActions {
  SET_LOGGED_IN_ADDRESS = "SET_LOGGED_IN_ADDRESS"
}

export const appActions = {
  setLoggedInAddress: (jobcoinAddress: string) => ({
    type: AppActions.SET_LOGGED_IN_ADDRESS,
    payload: {
      jobcoinAddress
    }
  })
};
