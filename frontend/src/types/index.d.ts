declare module "*.css";

export interface IMessage {
  date: Date;
  username: string;
  message: string;
}

export interface Events {
  msg: (data: IMessage) => void;
}
