import React, { useState } from "react"
import { PlayerInput } from "./PlayerInput";

export const PlayerMenu = ({ handleNames }) => {
	const [playerNames, setPlayerNames] = useState({
		playerName: ""
	});

	const setName = (name: string) => {
		setPlayerNames({...playerNames, playerName: name})
	}

	return(
		<div>
			<PlayerInput playerName="Player" setPlayerNames={setName}/>

			<a onClick={() => handleNames(playerNames.playerName)} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-yellow-50 text-yellow-600 inline-block">
				<span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-yellow-600 group-hover:h-full opacity-90"></span>
				<span className="relative group-hover:text-white">Let's go</span>
			</a>
			
		</div>
	);
}