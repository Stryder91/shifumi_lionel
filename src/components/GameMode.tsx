import React from "react"

export const ModeMenu = ({ handleStep }) => {
	return (
		<div className="flex flex-wrap justify-center">
			<div className="flex w-full justify-center">
				<button 
					onClick={() => handleStep(1)}
					className="m-2 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
					Easy
				</button>

				<button 
					onClick={() => handleStep(2)}
					className="m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
					Hard
				</button>
		
			</div>
			<div className="w-full">
				<p> <span className="font-underline">Easy</span> : you score is incrementing when winning.</p>
				<p> <span className="font-underline">Hard</span> : you score is reset when you lose.</p>
			</div>
		</div>
	);
}