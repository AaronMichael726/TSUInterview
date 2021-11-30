import './tile.css'
import Token from './token'

interface Props {
    number: number,
    tokenValue: number,
}

/**
 * 
 * Need to generate png based on tokenValue 
 */

export default function Tile({ number, tokenValue }: Props){

    if (number % 2 === 0){
        // console.log(number)
        return <div className="tile dark-tile"><Token tokenValue={tokenValue} /></div>
    } else {
        // console.log(number)
        return <div className="tile light-tile black-token"><Token tokenValue={tokenValue} /></div>
    }
}