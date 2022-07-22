import React from 'react';
import {Header} from "./components/Header/Header";
import './App.css';
import {Main} from "./components/Main/Main";
import {Scills} from "./components/Skills/Scills";
import {Portfolio} from './components/Portfolio/Portfolio'


export const App = () => {
  return (
    <div className="App">
        <Header />
        <Main />
        <Scills />
        <Portfolio />
    </div>
  );
}

