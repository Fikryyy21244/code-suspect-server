// ROLE
export type Role = "civilian" | "impostor";

// VOTE
export type TimerPhase = "vote-category" | "in-game" | "vote-impostor";

export type VoteState = {
  votes: Record<string, number>;
  playerVotes: Record<string, string>;
};

// GAME PHASE
export type GamePhase =
  | "lobby"
  | "vote-category"
  | "reveal-category-winner"
  | "reveal-player-role"
  | "in-game"
  | "vote-impostor"
  | "reveal-result-vote-impostor"
  | "reveal-the-winner"
  | "end-game";

// PLAYER
export type Player = {
  id: string;
  socketId: string;
  name: string;
  host: boolean;
  color: string;
  isReady: boolean;
  role?: boolean;
  isAlive: boolean;
};

// ROOM
export type RoomVotes = {
  category?: VoteState;
  impostor?: Record<number, VoteState>;
};

export type Room = {
  players: Player[];
  gameRound?: number;
  gamePhase?: GamePhase;
  categoryWinner?: string;
  impostorId?: string;
  votes?: RoomVotes;
  gameTimer?: {
    phase: TimerPhase;
    endTime: number;
  };
};

export type Rooms = Record<string, Room>;
