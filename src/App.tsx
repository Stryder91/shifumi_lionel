import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";

import { useTranslation } from "react-i18next";
import './utils/I18n';
import './App.css';
import { GameMenu } from "./components/GameMenu";

const App = () => {
  const { t } = useTranslation();
  // const {state, dispatch} = useContext(Context);

  return (<div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold">
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
          <Route path="/" element={<GameMenu />} />
        </Routes>
      </header>
  </div>);
}

export default App;
