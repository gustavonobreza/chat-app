import { io } from "socket.io-client";

const socket = io("ws://localhost:3388/", {});

console.log("Hello!");

socket.on("connect", () => {
  console.log(`connect ${socket.id}`);

  socket.emit("msg", {
    date: new Date(),
    name: "$USER_NAME",
    message: "Hello Everyone!",
  });

  socket.on("msg", (data) => {
    console.log("[MSG]:", data);
  })
});

socket.on("disconnect", () => {
  console.log(`disconnect`);
});
