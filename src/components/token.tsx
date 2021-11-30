import './tile.css'

interface Props {
    tokenValue: number
}

export default function Token({ tokenValue }: Props){

    if(tokenValue === 0){
        return <img className="token" src="assets/blackToken.png"></img>
    } else if (tokenValue === 1){
        return <img className="token" src="assets/redToken.png"></img>
    } else {
        return <div></div>
    }
    
}