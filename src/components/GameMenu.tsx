import React, { useEffect, useState } from "react"
import { Difficulty, GameMove, GameStep, Winner } from "../dto/enum";
import { IGameMenu, IGameResult } from "../dto/interfaces";
import { GameLogic } from "../utils/GameLogic";
import { GameBoard } from "./GameBoard";
import { ModeMenu } from "./GameMode";
import { PlayerMenu } from './PlayerMenu';

export const GameMenu = () => {
	const [gameSettings, setGameSetting] = useState({
		step: GameStep.PLAYER_NUMBER,
		score: 0
	} as IGameMenu);

	useEffect(() => {

		// check if player already has score in memory local storage
		const player = localStorage.getItem(`player-${gameSettings.playerName}`);
		
		// if it's the case, we retrieve his score
		if (player === gameSettings.playerName) {
			const score = localStorage.getItem(`score-${gameSettings.playerName}`);
			setGameSetting({
				...gameSettings,
				score: parseInt(score),
			});
		}
	}, [gameSettings.playerName]); // only call useEffect if playerName changed

	const handleStep = (mode: Difficulty) => {
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
		let score = result.winner === Winner.PLAYER 
			? gameSettings.score + 1 
			: gameSettings.score;

		// Hard mode
		if (gameSettings.mode === Difficulty.HARD && result.winner === Winner.COMPUTER) {
			score = 0;
		}

		localStorage.setItem(`score-${gameSettings.playerName}`, String(score));
		localStorage.setItem(`player-${gameSettings.playerName}`, String(gameSettings.playerName));
		setGameSetting({
			...gameSettings,
			playerOneChoice: moveOne,
			playerTwoChoice: result.computerChoice,
			step: GameStep.GAME_FINISH,
			result: result.winner,
			score: score
		});
	}

	const resetGame = () => {
		localStorage.removeItem(`score-${gameSettings.playerName}`);
		localStorage.removeItem(`player-${gameSettings.playerName}`);
		setGameSetting({
			...gameSettings,
			playerOneChoice: null,
			playerTwoChoice: null,
			step: GameStep.GAME_READY,
			result: null,
			score: 0
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
						reset={resetGame}
					/>
				: null
			}
		</div>
	);
}

