import React from "react"

export const PlayerInput = ({ playerName, setPlayerNames }) => {
	return (
		<div className="mb-4">
			<label className="block text-gray-700 text-sm font-bold mb-2">
				{playerName}
			</label>
			<input 
				onChange={e => setPlayerNames(e.target.value)}
				className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Choose a name"/>
		</div>
	);
}