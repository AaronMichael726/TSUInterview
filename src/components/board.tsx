import React from 'react'
import './board.css'
import Tile from './tile'

/**
 * We check right to left, bottom to top, start there
 */
// const isHorizontal = (board: any[][]) => {
//     let isMatch = 0
//     let totalMatch = 0

//     console.log('from function', board)

//     for (let i = 7; i > 0; i--){
//         // checkVertical(board, i)
//         for (let j = 7; j > 0; j--){

//             if (board[i][j] === board[i][j-1]){ 
//                 isMatch++ 
//                 console.log('duplicates: ', i, j)
//             }
//             if (isMatch === 3){
//                 totalMatch++
//                 isMatch = 0
//                 console.log('isMatch on ', i, j)
//                 console.log('total Mathces: ', totalMatch)
//             }

//             isMatch = 0
//         }
//     }

//     return totalMatch
// }

// // const checkVertical = (board: any[][], idx: number) => {

// // }



export default function Board(){
    let board = []
    let idx=0

    for(let i = 0; i < 8; i++){
        
        for(let j = 0;  j < 8; j++){
            const gridValue = j+i + 2
            board.push(<Tile number={gridValue} iidx={i} jidx={j} idx={idx} />)
            idx++ 
        }
    }

    return <div id="board">{board}</div>
}