import type { Server, Socket } from "socket.io";

export interface IMessage {
  date: Date;
  username: string;
  message: string;
}

export type IBasicEvent = { [event: string]: (...args: any[]) => void };

export type IBasicEventNoResponse = { [event: string]: any };

export interface ListenEvents {
  init: () => void;
  msg: (data: IMessage) => void;
  restore: (lastMsg?: IMessage) => void;
}

export type EmitEvents = {
  init: (data: IMessage[]) => void;
  msg: (data: IMessage) => void;
  restore: (data: IMessage[]) => void;
};

export interface ServerSideEvents {
  connection: (socket: Socket) => IServer;
}

export type IServer = Server<ListenEvents, EmitEvents, ServerSideEvents>;
