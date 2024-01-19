const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

import { Server } from "socket.io";

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("client-ready", () => {
    console.log("Recieved client ready");
    socket.broadcast.emit("get-state");
  });

  socket.on("game-state", (state) => {
    console.log("received game state");
    socket.broadcast.emit("game-state-from-server", state);
  });

  socket.on("clear", () => io.emit("clear"));
});

server.listen(3001, () => {
  console.log("✔️ Server listening on port 3001");
});
