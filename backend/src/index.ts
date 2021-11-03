import { Server } from "socket.io";
import type { IServer } from "./types";

const io: IServer = new Server(3388, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("[CONNECTED] Socket: ", socket.id);

  const msg = {
    date: new Date(),
    username: "server-guzin",
    message: "Hello world!",
  };

  socket.emit("msg", msg);

  socket.on("msg", (msg) => {
    console.log("recived", msg);
    socket.broadcast.emit("msg", msg);
  });

  socket.on("disconnect", () => {
    console.log("[DISCONNECTED] Socket: ", socket.id);
  });
});
