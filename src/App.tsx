import React from 'react';
import './App.css';
import Board from './components/board'
import Button from './components/button';
import Counter from './counter'
import generateTokenArray from './generateTokens'

function App() {

    let tokenArray = generateTokenArray

    return (
        <div id="app">
            <Board tokenArray={tokenArray} />
            <Button />
            <Counter tokenArray={tokenArray} />
        </div>
    );
}

export default App;
