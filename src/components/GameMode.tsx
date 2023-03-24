import { t } from "i18next";
import React from "react"
import { Difficulty } from "../dto/enum";

export const ModeMenu = ({ handleStep }) => {
	return (
		<div className="flex flex-wrap justify-center">
			<div className="flex w-full justify-center">
				<button 
					onClick={() => handleStep(Difficulty.EASY)}
					className="m-5 inline-block rounded bg-success px-6 pt-2.5 pb-2 text-s font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]">
					Easy
				</button>

				<button 
					onClick={() => handleStep(Difficulty.HARD)}
					className="m-5 inline-block rounded bg-warning px-6 pt-2.5 pb-2 text-s font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)]">
					Hard
				</button>
		
			</div>
			<div className="w-full mt-5">
				<p> <span className="underline">Easy</span> : {t("easyMode")} 🐰.</p>
				<p> <span className="underline">Hard</span> : {t("hardMode")} 💀.</p>
			</div>
		</div>
	);
}