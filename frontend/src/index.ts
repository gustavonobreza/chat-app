import "./index.css";
import { io, Socket } from "socket.io-client";
import { Events, IMessage, Listen } from "./types";

const socket: Socket<Listen, Events> = io("ws://localhost:3388/", {});

const msgDisplay = document.querySelector("#messages");
const inputDisplay = document.querySelector("#write") as HTMLInputElement;
const btnDisplay = document.querySelector("#send");

let username: string;
const messages: IMessage[] = [];

// INIT
socket.on("connect", () => {
  console.log(`Connect, id -> ${socket.id}`);
  console.log(`${socket.id} is ok`);
});

if (messages.length) {
  socket.emit("restore", messages[messages.length - 1]);
} else {
  socket.emit("restore");
}

socket.on("restore", (msgs) => {
  if (Array.isArray(msgs)) {
    msgs.forEach((msg) => {
      pushMessages(msg);
    });
  }
});

socket.on("msg", (msg: IMessage) => {
  pushMessages(msg);
});

function pushMessages(msg: IMessage) {
  messages.push(msg);
  const el = document.createElement("div");
  el.innerText = msg.username.trim() + " - " + msg.message;
  msgDisplay.appendChild(el);
}

btnDisplay.addEventListener("click", () => {
  const val = inputDisplay.value;

  if (!val || val.length === 0) {
    return;
  }

  const msg: IMessage = {
    message: val,
    date: new Date(),
    username: username || "_" + Math.random().toString(36).slice(2, 9),
  };

  if (!username) username = msg.username;

  socket.emit("msg", msg);
  messages.push(msg);

  inputDisplay.value = "";

  const el = document.createElement("div");
  el.innerText = msg.username.trim() + " - " + val;

  msgDisplay.appendChild(el);
});

console.log("oii");
