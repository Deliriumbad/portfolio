import React from 'react';
import {Header} from "./components/Header/Header";
import './App.scss';
import {Main} from "./components/Main/Main";
import {Scills} from "./components/Skills/Scills";
import {Portfolio} from './components/Portfolio/Portfolio';
import {Contacts} from './components/Contacts/Contacts';
import {Footer} from './components/Footer/Footer';

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Scills/>
            <Portfolio/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

