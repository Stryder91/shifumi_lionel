import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";

import { useTranslation } from "react-i18next";
import './utils/I18n';
import './App.css';
import { GameMenu } from "./components/GameMenu";
import { SwitchLocale } from './components/SwitchLocale';
// import { useContext } from 'react';
// import { Context } from './utils/Context';

const App = () => {
  const { t } = useTranslation();
  // const {state, dispatch} = useContext(Context);
  
  return (<div className="App">
      <header className="App-header">
        <a className="underline my-4" href="/">Home</a>
        <SwitchLocale />
        <h1 className="text-3xl font-bold mt-5">
          {t("title")}
        </h1>
        <a
          className="App-link py-5"
          href="https://fr.wikipedia.org/wiki/Pierre-papier-ciseaux"
          target="_blank"
          rel="noopener noreferrer"
        >
          What is Shifumi ?
        </a>
       
        <Routes >        
          <Route path="/" element={<Starter />} />
          <Route path="/game" element={<GameMenu />} />
        </Routes>
      </header>
  </div>);
}

export const Starter = () => {
  return (
    <a href="game" className="px-10 py-2 relative rounded group overflow-hidden font-medium bg-green-50 text-green-600 inline-block">
      <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-green-600 group-hover:h-full opacity-90"></span>
      <span className="relative group-hover:text-white">Start</span>
    </a>
  )
}
export default App;
