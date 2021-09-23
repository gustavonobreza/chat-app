import { io } from "socket.io-client";

const socket = io("ws://localhost:3388/", {});

console.log("Hello!");

socket.on("connect", () => {
  console.log(`connect ${socket.id}`);
});

socket.on("disconnect", () => {
  console.log(`disconnect`);
});
