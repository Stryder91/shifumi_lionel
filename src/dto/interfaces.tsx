import { GameMove, GameStep } from "./enum";

export interface IGameMenu {
	mode?: number;
	playerName?: string;
	playerOneChoice?: GameMove;
	playerTwoChoice?: GameMove;
	step: GameStep // from enum gameStep
	result?: number // winner 1 or 2 - draw is 0
	score: number
}

export interface IGameResult {
	winner: number;
	computerChoice: GameMove;
}