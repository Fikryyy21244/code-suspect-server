import { Server, Socket } from "socket.io";
import { rooms } from "../stores/room.store";
import { createRoomService } from "../services/room.service";

export const roomController = (socket: Socket) => {
  // ================== CREATE ROOM ==================
  socket.on(
    "create-room",
    ({ playerName, playerId }: { playerName: string; playerId: string }) => {
      createRoomService(socket, playerName, playerId);
    },
  );
};
