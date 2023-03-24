import { GameMove } from "../dto/enum";
import { IGameResult } from "../dto/interfaces";
import { ObjectType } from "../dto/objects";

// return the index of the winning player
export function GameLogic(moveOne: GameMove) : IGameResult {


	// if no players, computer select a random move
	const moves = Object.keys(ObjectType);
	const moveComputer: GameMove = ObjectType[moves[Math.floor(Math.random() * moves.length)]]['move'];
	
	// the very logic of the shifumi game
	if (
		moveOne === "STONE" as GameMove	&& moveComputer === "CISOR" as GameMove || 
		moveOne === "CISOR" as GameMove && moveComputer === "PAPER" as GameMove ||
		moveOne === "PAPER" as GameMove && moveComputer === "STONE" as GameMove
	) {
		// player one wins
		return {
			winner: 1,
			computerChoice: moveComputer
		}
	} 
	
	// draw (égalité)
	if (moveOne === moveComputer) {
		return {
			winner: 0,
			computerChoice: moveComputer
		}
	} 

	// computer wins
	return {
		winner: 2,
		computerChoice: moveComputer
	}
}
