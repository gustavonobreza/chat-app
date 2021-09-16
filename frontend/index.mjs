const socket = io("http://localhost:3388");

socket.emit("ola", { name: "Guzin" });
