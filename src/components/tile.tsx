
import './tile.css'
import Token from './token'

interface Props {
    number: number,
    idx: number,
    iidx: number,
    jidx: number
}

/**
 * 
 * Need to generate png based on tokenValue 
 */

export default function Tile({ number, idx, iidx, jidx}: Props){


    if (number % 2 === 0){
        return <div className="tile dark-tile"><Token iidx={iidx} jidx={jidx} idx={idx} /></div>
    } else {
        return <div className="tile light-tile black-token"><Token iidx={iidx} jidx={jidx} idx={idx} /></div>
    }
    
}