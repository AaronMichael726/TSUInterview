import React from "react";
import './counter.css'

interface Props {
    tokenArray: string[][]
}

const isHorizontal = (tokenArray: any[][]) => { 

    let count = 0
    let matchCount = 0

    for(let i = 7; i >0; i--){
        for (let k = 7; k > 0; k--){
            if (tokenArray[i][k] === tokenArray[i][k-1]){ 
                count++ 
            } else {
                count = 0
            }
            if (count === 3){
                matchCount++
                count = 0
            }
        }
        count = 0
    }

    return matchCount
}

const isVertical = (tokenArray: any[][]) => { 

    let count = 0
    let vertCount = 0

    for(let i = 7; i >0; i--){
        for (let k = 7; k > 0; k--){

            if (tokenArray[k][i] === tokenArray[k-1][i]){ 
                count++ 
            } else {
                count = 0
            }
            if (count === 3){

                vertCount++
                count = 0
            }
        }
        count = 0
    }

    return vertCount
}

/**
 * For Diag -- We check from top left to bottom right
 *          -- we check from top right to bottom left
 *          
 *   */ 

let diagonalMatch = 0

const isDiag = (tokenArray: any[][], init: number, diagMatch: number) => {
    
    let diagonalMatch = diagMatch
    let count = 0
    
    if (init === 0){
        for (let i = 0; i < 7; i++){
            if(tokenArray[i][init] === tokenArray[i+1][init+1]){ 
                count++ }
            if (count === 3){
                diagonalMatch++
                count = 0
            }
        }
        count = 0
    }

    if (init > 0 && init < 7){
        for (let i = 0; i < (7-init); i++){
            if(tokenArray[i][init] === tokenArray[i+1][init+1]){ 
                count++ }
            if (count === 3){
                diagonalMatch++
                count = 0
            }
        }
        count = 0
        for (let i = 0; i < (7-init); i++){
            if(tokenArray[init][i] === tokenArray[init+1][i+1]){ 
                count++ }
            if (count === 3){
                diagonalMatch++
                count = 0
            }
        }
        count = 0
    }

    if (init < 4 ){ isDiag(tokenArray, (init+1), diagonalMatch) }

    return diagonalMatch
}

const isCounterDiag = (tokenArray: any[][], init: number, diagMatch: number) => {
    
    let diagonalMatch = diagMatch
    let count = 0
    
    if (init === 7){
        for (let i = 0; i < 7; i++){
            if(tokenArray[i][init] === tokenArray[i+1][init-1]){ 
                count++ }
            if (count === 3){
                console.log('isCounterDiag function init = 7: ')
                console.log('found coutner diag: ', i, init)
                diagonalMatch++
                count = 0
            }
        }
        count = 0
    }

    if (init < 7 && init > 3){
        for (let i = init; i > 3; i--){
            if (count === 3){
                diagonalMatch++
                count = 0
                console.log('total: ', diagonalMatch)
            }
        }
        count = 0
        for (let i = 7; i > (7 - init); i--){
            if(tokenArray[i][init] === tokenArray[i-1][init-1]){
                count++ 
            }
            if (count === 3){
                diagonalMatch++
                count = 0
            }
        }
        count = 0
    }

    if (init > 3 ){ isCounterDiag(tokenArray, (init-1), diagonalMatch) }

    return diagonalMatch
}


export default function Count(tokenArray: Props){

    let diagonalCount = isDiag(tokenArray.tokenArray, 0, 0) + isCounterDiag(tokenArray.tokenArray, 7, 0)

    let count = isHorizontal(tokenArray.tokenArray) + isVertical(tokenArray.tokenArray)

    count += diagonalCount

    return <div className="counter">{count}</div>
}