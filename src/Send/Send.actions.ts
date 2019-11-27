export enum SendActions {
  SEND_JOBCOIN = "SEND_JOBCOIN"
}

export const sendActions = {
  sendJobcoin: (destination: string, amount: number) => ({
    type: SendActions.SEND_JOBCOIN,
    payload: {
      destination,
      amount
    }
  })
};
