import './tile.css'
import Token from './token'

interface Props {
    number: number,
    tokenValue: string,
    idx: number
}

export default function Tile({ number, tokenValue, idx }: Props){

    if (number % 2 === 0){
        return <div className="tile dark-tile"><Token tokenValue={tokenValue} idx={idx}/></div>
    } else {
        return <div className="tile light-tile black-token"><Token tokenValue={tokenValue} idx={idx}/></div>
    }
    
}