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
    let idx = 0
    

    for(let j = 0; j < 8; j++){
        
        board[j] = new Array()

        for(let i = 0;  i < 8; i++){

            const gridValue = j+i + 2
            const tokenValue = getRandomValue(3)

            board[j].push(<Tile number={gridValue} tokenValue={tokenValue} idx={idx}/>)
            idx++
        }
    }

    console.log(board)
    
    /**
     * What: Count possible matches 
     * Plan: start at (0,0) work right, down, and diagonal
     * 
     * pseudocode for working to the right:
     * - compare current with next and i < 5
     * if (board[0][i] === board[0][i+1]){
     *    count += 1
     * }
     */

    


    return <div id="board">{board}</div>
}