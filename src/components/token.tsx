import './tile.css'

interface Props {
    tokenValue: string,
    idx: number
}

export default function Token({ tokenValue, idx }: Props){

    if(tokenValue === "black"){
        return <div> {idx}<img className="token" src="assets/blackToken.png"></img></div>
    } else if (tokenValue === "red"){
        return <div> {idx}<img className="token" src="assets/redToken.png"></img></div>
    } else {
        return <div>{idx}</div>
    }
}