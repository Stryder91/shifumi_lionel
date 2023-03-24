import React, { useEffect, useState } from "react"
import { ObjectType } from "../dto/objects";
import { IGameMenu } from "../dto/interfaces";
import { GameMove } from "../dto/enum";

export const GameBoard = ({ gameSettings, choice }) => {

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
		}, 500);
	}, [playerTwoChoice]);

	const reloadMounted = () => {
		setMounted(false);
		setTimeout(() => {
			setMounted(true)
		}, 500);
	}

	const calculateGame = (move: GameMove) => {
		setSelected(move);
		reloadMounted();
		choice(move)
	}
	
	return(
		<div className="flex flex-wrap w-3/4 justify-center text-center">
			<p>Game mode : {mode === 1 ? "Easy" : "Hard" } </p>
			<p className="w-full">{playerName} score : {score}</p>
			<div className="m-5">
				{	Object.keys(ObjectType).map( obj => <div key={ObjectType[obj].index} className="m-5">
					<img className={`selected-img ${selected === ObjectType[obj].move && "selected"}`} onClick={() => calculateGame(ObjectType[obj].move)} src={ObjectType[obj].src} />
				</div>
				)}
			</div> 
			<div className="flex flex-col justify-center m-5 w-1/3">
				<p>{
					result === 1 
					? <>
						<p>The winner is {playerName}.</p>
						<p className="green-color font-bold"> Congratulations! </p>
						</>
					: result === 2 
					? <>
						<p>The winner is computer.</p>
						<p className="red-color font-bold"> Try again! </p>
						</>	
					: result === 0
					? `The score is equal, no winner!`
					: 
						<>
						<p>Select a piece to beat the opponent.</p>
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
			</div>
		</div>
	);
}

const Spinner = () => {
	return(<div
		className="img-container inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-warning motion-reduce:animate-[spin_1.5s_linear_infinite]"
		role="status">
		<span 
			className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
			>Loading...</span>
	</div>)
}