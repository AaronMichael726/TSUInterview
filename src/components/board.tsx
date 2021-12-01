import React from 'react'
import './board.css'
import Tile from './tile'
import generateTokenArray from '../generateTokens'

let tokenArray = generateTokenArray

export default function Board(){
    let board = []
    let idx = 1
    

    for(let i = 0; i < 8; i++){
        for(let j = 0;  j < 8; j++){

            const gridValue = j+i + 2
            
            board.push(<Tile number={gridValue} tokenValue={tokenArray[i][j]} idx={idx} />)
            idx++
        }
    }

    return <div id="board">{board}</div>
    
}