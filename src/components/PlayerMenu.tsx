import React, { useState } from "react"
import { PlayerInput } from "./PlayerInput";

export const PlayerMenu = ({ handleNames }) => {
	const [playerNames, setPlayerNames] = useState({
		playerName: ""
	});

	const setNameP1 = (name: string) => {
		setPlayerNames({...playerNames, playerName: name})
	}

	return(
		<div>
			<PlayerInput playerName={"player 1"} setPlayerNames={setNameP1}/>
		 	<button
				onClick={() => handleNames(playerNames.playerName)} 
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Let's go
			</button>
		</div>
	);
}