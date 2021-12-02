import React from 'react';
import './App.css';
import Board from './components/board'
import Count from './components/counter';

import generateTokenArray from './generateTokens'

function App() {

    let tokenArray = generateTokenArray

    return (
        <div id="app">
            <Board tokenArray={tokenArray} />
            <Count tokenArray={tokenArray} />
        </div>
    );
}

export default App;
