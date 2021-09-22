import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, { cors: { credentials: false, origin: "*" } });

io.on("connection", (socket) => {
  console.log("Client connected, socket: ", socket.id);
});

io.on("ola", (data) => {
  console.log(data);
})

httpServer.listen(3388);