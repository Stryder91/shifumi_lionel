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
			<PlayerInput playerName="Player Name" setPlayerNames={setName}/>

			<a onClick={() => handleNames(playerNames.playerName)}  href="#_" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-green-50 text-green-600 inline-block">
				<span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-green-600 group-hover:h-full opacity-90"></span>
				<span className="relative group-hover:text-white">Let's go</span>
			</a>

		</div>
	);
}