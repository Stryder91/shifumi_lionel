import { GameMove, Winner } from "../dto/enum";
import { IGameResult } from "../dto/interfaces";
import { ObjectType } from "../dto/constants";

// return the index of the winning player
export function GameLogic(moveOne: GameMove) : IGameResult {


	
	
	// if no players, computer select a random move
	const moves = Object.keys(ObjectType);
	const moveComputer: GameMove = ObjectType[moves[Math.floor(Math.random() * moves.length)]]['move'];

	console.log("moveOne", moveOne);
	console.log("moveComputer", moveComputer);
	
	// the very logic of the shifumi game
	if (
		moveOne === "STONE" as GameMove	&& moveComputer === "CISOR" as GameMove || 
		moveOne === "CISOR" as GameMove && moveComputer === "PAPER" as GameMove ||
		moveOne === "PAPER" as GameMove && moveComputer === "STONE" as GameMove
	) {
		// player one wins
		return {
			winner: Winner.PLAYER,
			computerChoice: moveComputer
		}
	} 
	
	// draw (égalité)
	if (moveOne === moveComputer) {
		return {
			winner: Winner.DRAW,
			computerChoice: moveComputer
		}
	} 

	// computer wins
	return {
		winner: Winner.COMPUTER,
		computerChoice: moveComputer
	}
}
