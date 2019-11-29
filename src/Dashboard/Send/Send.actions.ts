export enum SendActions {
  SEND_JOBCOIN = "SEND_JOBCOIN",
  SET_SEND_STATUS = "SET_SEND_STATUS"
}

export enum SendStatus {
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
  INIT = "INIT"
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
  setSendStatus: (status: SendStatus, message: string) => ({
    type: SendActions.SET_SEND_STATUS,
    payload: {
      status,
      message
    }
  })
};
