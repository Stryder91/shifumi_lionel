import React, { useEffect, useState } from "react"
import { ObjectType } from "../dto/objects";
import { IGameMenu } from "../dto/interfaces";
import { GameMove } from "../dto/enum";
import { t } from 'i18next';

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
			<p>Game mode : <span className="font-bold">{mode === 1 ? "Easy" : "Hard" }</span>  </p>
			<p className="w-full"><span className="font-bold green-color">{playerName} </span> score : {score}</p>
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
						<p className="green-color font-bold"> 🎉 Congratulations! 🎉</p>
						</>
					: result === 2 
					? <>
						<p>{t("computer")}.</p>
						<p className="red-color font-bold"> Try again! </p>
						</>	
					: result === 0
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
				<a onClick={reset}  href="#_" className="mt-5 px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-red-50 text-red-600 inline-block">
					<span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 group-hover:h-full opacity-90"></span>
					<span className="relative group-hover:text-white">Reset</span>
				</a>
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