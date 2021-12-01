import './tile.css'

interface Props {
    iidx: number, 
    jidx: number,
    idx: number
}

const getRandomValue = (max: number) => {
    return Math.floor(Math.random() * max)
}

export default function Token({ iidx, jidx, idx }: Props){

    let tokenArray = []

    for (let i = 0; i < 8; i++){
        tokenArray[i] = new Array()
        for (let j = 0; j < 8; j++){
            tokenArray[i].push(getRandomValue(3))
            console.log(tokenArray[i])
        }   
    }

    if(tokenArray[iidx][jidx] === 2){
        return <img className="token" src="assets/blackToken.png"></img>
    } else if (tokenArray[iidx][jidx] === 1){
        return <img className="token" src="assets/redToken.png"></img>
    } else {
        return <div></div>
    }
}