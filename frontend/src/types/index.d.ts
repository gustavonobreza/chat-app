declare module "*.css";

export interface IMessage {
  date: Date;
  username: string;
  message: string;
}

export interface Events {
  init: () => void;
  msg: (data: IMessage) => void;
  restore: (lastMsg: IMessage) => void;
}
