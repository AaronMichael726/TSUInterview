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
    const tokenArray = new Array()

    // I know there are 64 spaces, making this array 64 units for testing rn
    for (let i = 0; i <= 63; i++){
        tokenArray.push(getRandomValue(3))
    }

    let idx = 0

    console.log('first run through ', tokenArray)
    for(let j = 0; j < 8; j++){
        for(let i = 0;  i < 8; i++){

            const gridValue = j+i + 2
            board.push(<Tile number={gridValue} tokenValue={tokenArray[idx]}/>)
            idx++
        }
    }

    console.log('second run through ', tokenArray)

    return <div id="board">{board}</div>
}