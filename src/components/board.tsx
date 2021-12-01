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
    let tokenArray = new Array()

    // I know there are 64 spaces, making this array 64 units for testing rn
    for (let i = 0; i < 8; i++){
        tokenArray[i] = new Array()
        for (let j = 0; j < 8; j++){
            tokenArray[i].push(getRandomValue(3))
        }   
    }

    for(let i = 0; i < 8; i++){
        for(let j = 0;  j < 8; j++){
            const gridValue = j+i + 2
            board.push(<Tile number={gridValue} tokenValue={tokenArray[i][j]}/>)
        }
    }

    // test that all values in tokenArray are equal to the token value
    // test confirms that array === tokenValue we can safely run logic on array
    // console.log(tokenArray[0][0])
    // console.log(board[0].props.tokenValue)

    // let isTrue = 0
    // let idx = 0
    // for (let i=0; i < 8; i++){
    //     for (let j = 0; j < 8; j++){
    //         console.log(typeof tokenArray[i][j])
    //         console.log(typeof board[idx].props.tokenValue)
    //         if (tokenArray[i][j] === board[idx].props.tokenValue){
    //             isTrue++
    //         }
    //         idx++
    //     }

    //     console.log(isTrue)
    // }

    return <div id="board">{board}</div>
}