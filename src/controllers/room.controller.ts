import { Server, Socket } from "socket.io";
import { rooms } from "../stores/room.store";
import { checkRoomService, createRoomService } from "../services/room.service";

export const roomController = (socket: Socket) => {
  // ====> CREATE ROOM
  socket.on(
    "create-room",
    ({ playerName, playerId }: { playerName: string; playerId: string }) => {
      createRoomService(socket, playerName, playerId);
    },
  );

  // ====> CHECK ROOM
  socket.on("check-room", ({ roomId }) => {
    checkRoomService(roomId, socket);
  });
};
