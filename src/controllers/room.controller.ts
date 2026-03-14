import { Server, Socket } from "socket.io";
import { rooms } from "../stores/room.store";
import {
  checkRoomService,
  createRoomService,
  getRoomService,
} from "../services/room.service";

export const roomController = (socket: Socket) => {
  // ====> CREATE ROOM
  socket.on(
    "create-room",
    ({ playerName, playerId }: { playerName: string; playerId: string }) => {
      createRoomService(socket, playerName, playerId);
    },
  );

  // ====> CHECK ROOM
  socket.on("check-room", ({ roomId }: { roomId: string }) => {
    checkRoomService(roomId, socket);
  });

  socket.on(
    "get-room",
    ({ roomId, playerId }: { roomId: string; playerId: string }) => {
      getRoomService(roomId, playerId, socket);
    },
  );

  //
};
