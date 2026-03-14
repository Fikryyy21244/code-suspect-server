import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import { initSocket } from "./config/socket";

const app = express();

app.use(cors);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

initSocket(io);

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
