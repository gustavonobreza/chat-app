import { Server } from "socket.io";
import type { IMessage, IServer } from "./types";

const io: IServer = new Server(3388, { cors: { origin: "*" } });
const cache = new Array<IMessage>();

io.on("connection", (socket) => {
  console.log("[CONNECTED] Socket: ", socket.id);

  socket.on("msg", (msg) => {
    socket.broadcast.emit("msg", msg);
    cache.push(msg);
  });

  socket.on("init", () => {
    socket.emit("init", cache);
  });

  socket.on("restore", (last) => {
    if (last === undefined) {
      socket.emit("restore", cache);
      return;
    }

    const { date, message, username } = last;

    const messageCompareIndex = cache.findIndex(
      (msg) =>
        msg.date === date &&
        msg.message === message &&
        msg.username === username
    );

    if (messageCompareIndex !== -1) {
      const msgs = cache.slice(messageCompareIndex, cache.length);

      socket.emit("restore", msgs);
    }
  });

  socket.on("disconnect", () => {
    console.log("[DISCONNECTED] Socket: ", socket.id);
  });
});
