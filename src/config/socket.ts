import { Server } from "socket.io";
import { roomController } from "../controllers/room.controller";

export const initSocket = (io: Server) => {
  io.on("connection", (socket) => {
    console.log("user connected", socket.id);

    roomController(socket);
  });
};
