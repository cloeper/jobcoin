import { SendActions, SendStatus } from "./Send.actions";
import { Record } from "immutable";

export interface ISendState {
  sendStatus: SendStatus;
  message: string;
}

const sendStateInitialRecord = Record<ISendState>({
  sendStatus: SendStatus.INIT,
  message: ""
});

export function sendReducer(
  state = sendStateInitialRecord(),
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case SendActions.SET_SEND_STATUS:
      return state
        .set("sendStatus", action.payload.status)
        .set("message", action.payload.message);
    default:
      return state;
  }
}
