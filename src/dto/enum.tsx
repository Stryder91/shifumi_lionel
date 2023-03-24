export enum GameStep {
	PLAYER_NUMBER,
	PLAYER_NAME,
	GAME_READY,
	GAME_FINISH
}

export type GameMove = "PAPER" | "CISOR" | "STONE";

export enum Difficulty {
	EASY, 
	HARD
}

export enum Winner {
	PLAYER,
	COMPUTER,
	DRAW // equality
}