import React, { useEffect, useState } from "react"
import { ObjectType, TIMEOUT } from "../dto/constants";
import { IGameMenu } from "../dto/interfaces";
import { Difficulty, GameMove, Winner } from "../dto/enum";
import { t } from 'i18next';
import { ResetButton } from "./ResetButton";
import { Spinner } from "./Spinner";

export const GameBoard = ({ gameSettings, choice, reset }) => {

	const loadingImg = `./loading.png`;

	// selected is just for green border css when select a move
	const [selected, setSelected] = useState(null);

	// mounting is just to handle the "loading" spinner
	const [mounted, setMounted] = useState(false);

	const { 
		result, 
		playerName, 
		playerTwoChoice, 
		score, 
		mode 
	} = gameSettings as IGameMenu;

	useEffect(()=> {
		setTimeout(() => {
			setMounted(true)
		}, TIMEOUT);
	}, [playerTwoChoice]);

	const reloadMounted = () => {
		setMounted(false);
		setTimeout(() => {
			setMounted(true)
		}, TIMEOUT);
	}

	const calculateGame = (move: GameMove) => {
		setSelected(move);
		reloadMounted();
		choice(move)
	}
	
	const resetAll = () => {
		setSelected(null);
		reset();
	}
	
	return(
		<div className="flex flex-wrap w-3/4 justify-center text-center">
			<p>Game mode : <span className="font-bold">{mode === Difficulty.EASY ? "Easy" : "Hard" }</span>  </p>
			<p className="w-full"><span className="font-bold green-color">{playerName} </span> score : {score}</p>
			<div className="m-5">
				{	Object.keys(ObjectType).map( obj => <div key={ObjectType[obj].index} className="m-5">
					<img 
						className={`selected-img ${selected === ObjectType[obj].move && "selected"}`} 
						onClick={() => calculateGame(ObjectType[obj].move)} src={ObjectType[obj].src} 
					/>
				</div>
				)}
			</div> 
			<div className="flex flex-col justify-center m-5 w-1/3">
				<p>{
					result === Winner.PLAYER
					? <>
						<p>The winner is {playerName}.</p>
						<p className="green-color font-bold"> 🎉 Congratulations! 🎉</p>
						</>
					: result === Winner.COMPUTER
					? <>
						<p>{t("computer")}.</p>
						<p className="red-color font-bold"> Try again! </p>
						</>	
					: result === Winner.DRAW
					? <p>{t("draw")}</p> 
					: 
						<>
						<p>{t("start")}.</p>
						<p className="blue-color font-bold"> Let's go! </p>
						</>
				}</p>
			</div>
			<div className="flex flex-col justify-center m-5">
				{playerTwoChoice && mounted
				? <img src={ObjectType[playerTwoChoice].src}  alt="move" />
				: playerTwoChoice
				? <Spinner />
				: <img src={loadingImg}  alt="loading" />}
				<ResetButton reset={resetAll} />
			</div>
		</div>
	);
}



