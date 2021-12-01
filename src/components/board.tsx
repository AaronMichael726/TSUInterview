import React from 'react'
import './board.css'
import Tile from './tile'

// get num between 0, 1, 2
function getRandomValue(max: number) {
    return Math.floor(Math.random() * max)
}

/**
 * We check right to left, bottom to top, start there
 */
const isHorizontal = (board: any[][]) => {
    let isMatch = 0
    let totalMatch = 0

    console.log('from function', board)

    for (let i = 7; i > 0; i--){
        // checkVertical(board, i)
        for (let j = 7; j > 0; j--){
            // console.log('i: ', i, ' j: ', j)
            // console.log('i: ', i, ' j: ', j-1)
            // console.log('board[i][j]: ', board[i][j], 'board[i][j-1]:', board[i][j-1])

            if (board[i][j] === board[i][j-1]){ 
                isMatch++ 
                console.log('duplicates: ', i, j)
            }
            if (isMatch === 3){
                totalMatch++
                isMatch = 0
                console.log('isMatch on ', i, j)
                console.log('total Mathces: ', totalMatch)
            }

            isMatch = 0
        }
    }

    return totalMatch
}

// const checkVertical = (board: any[][], idx: number) => {

// }

function getTokenValue(){
    let tokenArray = []

    for (let i = 0; i < 8; i++){
        tokenArray[i] = new Array()
        for (let j = 0; j < 8; j++){
            tokenArray[i].push(getRandomValue(3))
        }   
    }

    return tokenArray
}


export default function Board(){
    let board = []
    let idx=0

    const tokenArray = getTokenValue()

    let newArray = []

    for(let i = 0; i < 8; i++){
        
        newArray[i] = new Array()
        for(let j = 0;  j < 8; j++){
            const gridValue = j+i + 2
            let tokenValue = tokenArray[i][j]
            board.push(<Tile number={gridValue} tokenValue={tokenValue} idx={idx}/>)
            newArray[i].push(tokenValue)

            idx++ 
        }
    }

    console.log(tokenArray)
    console.log(newArray)

    

    return <div id="board">{board}</div>
}