import React from 'react'
import './board.css'

// horizontal and vertical axis consts for testing
// const verticalAxis = [1,2,3,4,5,6,7,8]
// const horizontalAxis = ['a','b','c','d','e','f','g','h']

export default function Board(){
    let board = []

    for(let j = 0; j < 8; j++){
        for(let i = 0;  i < 8; i++){

            const gridValue = j+i + 2

            if (gridValue % 2 === 0){
                board.push(
                    <div className="white-tile"></div>)
            } else {
                board.push(
                    <div className="black-tile"></div>)
            }
        }
    }

    return <div id="board">{board}</div>
}