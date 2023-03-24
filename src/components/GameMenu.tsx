import React, { useState } from "react"
import { GameMove, GameStep } from "../dto/enum";
import { IGameMenu, IGameResult } from "../dto/interfaces";
import { GameLogic } from "../utils/GameLogic";
import { GameBoard } from "./GameBoard";
import { ModeMenu } from "./GameMode";
import { PlayerMenu } from './PlayerMenu';

export const GameMenu = () => {
	const [gameSettings, setGameSetting] = useState({
		step: GameStep.PLAYER_NUMBER,
		playerName: "Lionel",
		score: 0
	} as IGameMenu);

	const handleStep = (mode: number) => {
		if (gameSettings.step === GameStep.PLAYER_NUMBER){
			setGameSetting({
				...gameSettings,
				mode: mode,
				step: GameStep.PLAYER_NAME
			});
		}
	}

	const handleNames = (playerName: string) => {
		if (gameSettings.step === GameStep.PLAYER_NAME){
			setGameSetting({
				...gameSettings,
				playerName: playerName,
				step: GameStep.GAME_READY
			});
		}
	}

	const handleMove = (moveOne: GameMove) => {
		const result : IGameResult = GameLogic(moveOne);	
		let score = result.winner === 1 
			? gameSettings.score + 1 
			: gameSettings.score;

		// Hard mode
		if (gameSettings.mode === 2 && result.winner === 2) {
			score = 0;
		}

		setGameSetting({
			...gameSettings,
			playerOneChoice: moveOne,
			playerTwoChoice: result.computerChoice,
			step: GameStep.GAME_FINISH,
			result: result.winner,
			score: score
		});
	}

	return(
		<div className="mt-5 w-full flex justify-center">
			{ gameSettings.step === GameStep.PLAYER_NUMBER
			? <ModeMenu handleStep={handleStep} />
			: gameSettings.step === GameStep.PLAYER_NAME 
			?	<PlayerMenu handleNames={handleNames} />
			: null
			}

			{
				gameSettings.step === GameStep.GAME_READY || gameSettings.step === GameStep.GAME_FINISH
				? <GameBoard 
						gameSettings={gameSettings} 
						choice={handleMove}
					/>
				: null
			}
		</div>
	);
}

