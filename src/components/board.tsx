import React from 'react'
import './board.css'
import Tile from './tile'

// horizontal and vertical axis consts for testing
// const verticalAxis = [1,2,3,4,5,6,7,8]
// const horizontalAxis = ['a','b','c','d','e','f','g','h']

/**
 * Randomize between 1 and 3
 */

 function getRandomValue(max: number) {
    return Math.floor(Math.random() * max)
}

export default function Board(){
    let board = []
    

    for(let j = 0; j < 8; j++){
        for(let i = 0;  i < 8; i++){

            const gridValue = j+i + 2
            const tokenValue = getRandomValue(3)
            
            board.push(<Tile number={gridValue} tokenValue={tokenValue}/>)
        }
    }

    return <div id="board">{board}</div>
}