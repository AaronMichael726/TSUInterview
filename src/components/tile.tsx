import './tile.css'
import Token from './token'

interface Props {
    number: number
}

/**
 * 
 * Need to generate png based on tokenValue 
 */

export default function Tile({ number }: Props){

    if (number % 2 === 0){
        return <div className="tile dark-tile"></div>
    } else {
        return <div className="tile light-tile black-token"></div>
    }
    
}