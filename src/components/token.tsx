import './tile.css'

interface Props {
    tokenValue: string,
    idx: number
}

function getRandomValue(max: number) {
    return Math.floor(Math.random() * max)
}

export default function Token({ tokenValue, idx }: Props){

    if(tokenValue === "black"){
        return <div>2 {idx}<img className="token" src="assets/blackToken.png"></img></div>
    } else if (tokenValue === "red"){
        return <div>1 {idx}<img className="token" src="assets/redToken.png"></img></div>
    } else {
        return <div>0 {idx}</div>
    }
}