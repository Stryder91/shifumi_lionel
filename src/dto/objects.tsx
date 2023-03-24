import { GameMove } from "./enum";

// each move is also in value in order to enforce type
export const ObjectType = {
	'STONE': {
		index: 0,
		src: `./stone.png`,
		move: "STONE" as GameMove 
	},
	'PAPER': {
		index: 1,
		src: `./paper.png`,
		move: "PAPER" as GameMove
	},
	'CISOR': {
		index: 2,
		src: `./cisor.png`,
		move: "CISOR" as GameMove
	},
}