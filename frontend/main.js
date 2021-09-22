import './style.css'
import { io } from "socket.io-client";

const socket = io("ws://localhost:3388/", {})

socket.on("connect", () => {
  console.log(`connect ${socket.id}`);
});

socket.on("disconnect", () => {
  console.log(`disconnect`);
});

// setInterval(() => {
//   const start = Date.now();
//   socket.emit("ping", () => {
//     console.log(`pong (latency: ${Date.now() - start} ms)`);
//   });
// }, 1000);

document.querySelector('#app').innerHTML = `
<h1>Chat App</h1>
<div id="msg_whapper"></div>
`

const msgs = document.querySelector("#msg_whapper")

socket.on("msg", (data, oi) => {
  console.log("data: ", data);

  const p = document.createElement('p')
  p.textContent = data

  msgs.appendChild(p)
})