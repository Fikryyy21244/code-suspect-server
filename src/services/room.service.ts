import { Socket } from "socket.io";
import { generateRoomId } from "../utils/generateRoomId";
import { rooms } from "../stores/room.store";
import { PLAYER_COLORS } from "../utils/playerColors";

// ====> CREATE ROOM
export const createRoomService = (
  socket: Socket,
  playerName: string,
  playerId: string,
) => {
  const roomId = generateRoomId();

  socket.join(roomId);

  rooms[roomId] = {
    players: [
      {
        playerId,
        socketId: socket.id,
        name: playerName,
        color: PLAYER_COLORS[0],
        host: true,
        isAlive: true,
        isReady: false,
      },
    ],
    gamePhase: "lobby",
  };

  socket.emit("room-created", {
    roomId,
    players: rooms[roomId],
  });
};

// ====> CHECK ROOM
export const checkRoomService = (roomId: string, socket: Socket) => {
  if (!rooms[roomId]) {
    socket.emit("room-not-found", {
      message: `Room with roomId ${roomId} not found`,
    });
  }

  socket.emit("room-is-found", {
    message: `Room with roomId ${roomId} is found`,
  });
};

// ====> GET ROOM
export const getRoomService = (
  roomId: string,
  playerId: string,
  socket: Socket,
) => {
  const room = rooms[roomId];
  if (!room) return;

  const playerIndex = room.players.findIndex((p) => p.playerId === playerId);

  if (playerIndex !== -1) {
    room.players[playerIndex].socketId = socket.id;
  }

  socket.join(roomId);

  socket.emit("room-update", room);
};
