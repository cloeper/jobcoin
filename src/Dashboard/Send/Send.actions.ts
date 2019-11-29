export enum SendActions {
  SEND_JOBCOIN = "SEND_JOBCOIN"
}

export const sendActions = {
  sendJobcoin: (fromAddress: string, toAddress: string, amount: number) => ({
    type: SendActions.SEND_JOBCOIN,
    payload: {
      fromAddress,
      toAddress,
      amount
    }
  })
};
