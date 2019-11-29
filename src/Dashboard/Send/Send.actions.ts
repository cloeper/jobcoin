export enum SendActions {
  SEND_JOBCOIN = "SEND_JOBCOIN",
  SEND_SUCCESS = "SEND_SUCCESS",
  SEND_FAILURE = "SEND_FAILURE"
}

export const sendActions = {
  sendJobcoin: (fromAddress: string, toAddress: string, amount: string) => ({
    type: SendActions.SEND_JOBCOIN,
    payload: {
      fromAddress,
      toAddress,
      amount
    }
  }),
  sendSuccess: () => ({
    type: SendActions.SEND_SUCCESS
  }),
  sendFailure: (failureMessage: string) => ({
    type: SendActions.SEND_SUCCESS,
    payload: {
      failureMessage
    }
  })
};
