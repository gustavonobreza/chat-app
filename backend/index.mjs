import { Server } from "socket.io";

const io = new Server(3388, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("[SocketIO] Client connected, socket: ", socket.id);

  socket.on("ping", (cb) => {
    console.log("ping");
    cb();
  });

  socket.on("disconnect", () => {
    console.log(`disconnect ${socket.id}`);
  });

  socket.on("msg", (data) => {
    console.log("[MESSAGE]", data);
    socket.broadcast.emit("msg", data);
  });
});
