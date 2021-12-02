import React from 'react';
import './App.css';
import Board from './components/board'
import CountButton from './components/button';
import ResetButton from './components/reset';
import Count from './components/counter';

import generateTokenArray from './generateTokens'

function App() {

    let tokenArray = generateTokenArray

    return (
        <div id="app">
            <Board tokenArray={tokenArray} />
            <CountButton />
            <Count tokenArray={tokenArray} />
            <ResetButton />
        </div>
    );
}

export default App;
