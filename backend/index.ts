console.clear();
import { Server } from "socket.io";
import { IMessage } from "types";

const io = new Server(3388, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("[CONNECTED] Socket: ", socket.id);

  const msg = {
    date: new Date(),
    username: "server-guzin",
    message: "Hello world!",
  };

  socket.emit("msg", msg);

  socket.on("msg", (msg: IMessage) => {
    console.log("recived", msg);
    socket.broadcast.emit("msg", msg);
  });

  socket.on("disconnect", () => {
    console.log("[DISCONNECTED] Socket: ", socket.id);
  });
});
