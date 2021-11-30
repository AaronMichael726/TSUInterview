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
        console.log("index: ", idx, " color: ", tokenValue)
        return <div>2 {idx}<img className="token" src="assets/blackToken.png"></img></div>
    } else if (tokenValue === "red"){
        console.log("index: ", idx, " color: ", tokenValue)
        return <div>1 {idx}<img className="token" src="assets/redToken.png"></img></div>
    } else {
        console.log("index: ", idx, " color: ", tokenValue)
        return <div>0 {idx}</div>
    }
}