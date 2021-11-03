import type { Server, Socket } from "socket.io";

export interface IMessage {
  date: Date;
  username: string;
  message: string;
}

export type IBasicEvent = { [event: string]: (...args: any[]) => void };
export type IBasicEventNoResponse = { [event: string]: any };

export interface ListenEvents {
  msg: (data: IMessage) => void;
}

export type EmitEvents = ListenEvents;

export interface ServerSideEvents {
  connection: (socket: Socket) => IServer;
}

export type IServer = Server<ListenEvents, EmitEvents, ServerSideEvents>;
