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

function checkVertical(board: any[][], i: number){
    let verticalCount = 1
    let verticalMatches = 0

    for (let j = 7; j > 0; j--){
        if (board[i][j] === board[i][j-1]){
            verticalCount++
        } else {
            verticalCount = 1
        }
        if (verticalCount === 4){ verticalMatches ++ }
    }

    
}

function checkHorizontal(board: any[][]){
    let horizontalCount = 0
    let matches = 0
    
    for(let i = 7; i > 0; i--){
        // checkVertical(board, i)
        for(let j = 7; j > 0; j--){
            // console.log('index: ',board[i][j].props.idx, ' value: ', board[i][j].props.tokenValue)
            // // console.log('index: ',board[i][j-1].props.idx, ' value: ', board[i][j-1].props.tokenValue)
            
            if (board[i][j].props.tokenValue === board[i][j-1].props.tokenValue){
                horizontalCount++
                if (horizontalCount === 4){ 
                    matches++ 
                    console.log('found match!!! total matches: ', matches)
                }
            } else {
                horizontalCount = 1
            }
        }
        // console.log(i, matches)
        horizontalCount = 1
    }

}

export default function Board(){
    let board = []
    let idx = 0

    for(let j = 0; j < 8; j++){
        
        board[j] = new Array()

        for(let i = 0;  i < 8; i++){

            const gridValue = j+i + 2
            const tokenValue = Math.floor(Math.random() * 3)
            console.log('random value: ', tokenValue)
            let color: string = "blank"
            
            if (tokenValue === 1) { color = "red" }
            if (tokenValue === 0) { color = "black" }

            console.log('color: ', color)
            
            board[j].push(<Tile number={gridValue} tokenValue={color} idx={idx}/>)
            idx++
            
            // console.log(board[j][i].props)
            // console.log(color)

            color = 'blank'
        } 
    }
    // checkHorizontal(board)
    
    /**
     * What: Count possible matches 
     * Plan: start at (0,0) work right, down, and diagonal
     * 
     * 3 functions
     * 
     * at [7][7] we check vert and diag we notice recursion is necessary
     * 
     * @ [7][7] we call vertical() diagonal() 
     * 
     * in vertical we call horizonatl() diagonal() -- notice diagonal will exceed bounds 
     * 
     */

    return <div id="board">{board}</div>
}