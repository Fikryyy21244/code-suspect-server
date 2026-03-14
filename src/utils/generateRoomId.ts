import { rooms } from "../stores/room.store";

export const generateRoomId = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let roomId: string;

  do {
    roomId = "";

    for (let i = 0; i < 6; i++) {
      roomId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  } while (rooms[roomId]);

  return roomId;
};
