import './tile.css'
import Token from './token'

interface Props {
    number: number,
    tokenValue: number,
    idx: number,
}

/**
 * 
 * Need to generate png based on tokenValue 
 */

export default function Tile({ number, tokenValue, idx }: Props){

    console.log('output: ', tokenValue)

    if (number % 2 === 0){
        return <div className="tile dark-tile"><Token tokenValue={tokenValue} /></div>
    } else {
        return <div className="tile light-tile black-token"><Token tokenValue={tokenValue} /></div>
    }
    
}