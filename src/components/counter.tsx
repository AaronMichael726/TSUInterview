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
                console.log('found a horizontal match at ', i, k)
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
                console.log('found a vertical match at ', k, i)
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

const isDiag = (tokenArray: any[][], init: number) => {
    
    let diagonalMatch = 0

    let count = 0
    
    if (init === 0){
        for (let i = 0; i < 7; i++){
            if(tokenArray[i][init+i] === tokenArray[i+1][init+i+1]){ 
                count++ 
            } else {
                count = 0
            }
            if (count === 3){
                console.log('found diag at init = ', init, ': ', i, (init+i))
                diagonalMatch++
                count = 0
            }
        }
        
    }

    if (init > 0 && init < 7){
        for (let i = 0; i < (7-init); i++){
            if(tokenArray[i][init+i] === tokenArray[i+1][init+i+1]){ 
                count++ 
            } else {
                count = 0
            }
            if (count === 3){
                console.log('found diag at init = ', init, ': ', i, (init+i))
                diagonalMatch++
                count = 0
            }
        }
        count = 0
        for (let i = 0; i < (7-init); i++){
            if(tokenArray[init+i][i] === tokenArray[init+i+1][i+1]){ 
                count++ 
            } else {
                count = 0 
            }
            if (count === 3){
                console.log('found diag at init = ', init, ': ', (init+i), i,)
                diagonalMatch++
                count = 0
            }
        }
        count = 0
    }

    return diagonalMatch
}

const findDiagMatches = (tokenArray: any[][]) => {
    let diagonalMatch = 0

    for (let i = 0; i < 4; i++){
        diagonalMatch += isDiag(tokenArray, i)
    }

    for (let i = 7; i > 2; i--){
        diagonalMatch += isCounterDiag(tokenArray, i)
    }

    return diagonalMatch
}

const isCounterDiag = (tokenArray: any[][], init: number) => {
    
    let count = 0
    let diagonalMatch = 0

    if (init === 7){
        for (let i = 0; i < 7; i++){
            if(tokenArray[i][init-i] === tokenArray[i+1][init-i-1]){ 
                count++ 
            } else {
                count = 0 
            }
            if (count === 3){
                console.log('LIne 146: found coutner diag at init = ', init, ': ', i, (init-i))
                diagonalMatch++
                count = 0
            }
        }
        count = 0
    }

    if (init < 7 && init > 3){
        for (let i = 0; i < init; i++){
            
            if (tokenArray[i][init-i] === tokenArray[i+1][init-i-1]){
                count++
            }else {
                count = 0
            }

            if (count === 3){
                console.log('Line 164: found counter diag at init = ', init, ': ', i, (init-i))
                diagonalMatch++
                count = 0
            }
        }
        count = 0

        let index = 0
        for (let i = 7; i > (7 - init); i--){
            if(tokenArray[i][i-init+(2*index)] === tokenArray[i-1][i-init+(2*index)+1]){
                count++ 
            } else {
                count = 0 
            }
            if (count === 3){
                console.log('line 178: found counter diag at init = ', init, ': ', i, (i-init+(2*index)))
                diagonalMatch++
                count = 0
            }
            index++
        }
        count = 0
    }

    return diagonalMatch
}


export default function Count(tokenArray: Props){

    let diagonalCount = findDiagMatches(tokenArray.tokenArray)

    let count = isHorizontal(tokenArray.tokenArray) + isVertical(tokenArray.tokenArray)

    count += diagonalCount

    return <div className="counter">Total Matches: {count}</div>
}