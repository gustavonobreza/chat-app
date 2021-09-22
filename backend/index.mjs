console.clear()
import { Server } from "socket.io";

const io = new Server(3388, { cors: { origin: '*' } });

io.on("connection", (socket) => {
  console.log("[SocketIO] Client connected, socket: ", socket.id);

  socket.on("ping", (cb) => {
    console.log("ping");
    cb();
  });

  socket.on("disconnect", () => {
    console.log(`disconnect ${socket.id}`);
  });

  socket.emit("msg", "UUUUUUUUUUUUi !")
  setInterval(() => {
    socket.emit("msg", "olááááá !!!")
  }, 1000);
});

