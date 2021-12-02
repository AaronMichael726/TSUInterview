const getRandomValue = (max) => {
    return Math.floor(Math.random() * max)
}

const getRandomColor = () => {
    let randomValue = getRandomValue(3)

    if(randomValue === 0){
        return "blank"
    } else if (randomValue === 1){
        return "red"
    } else {
        return "black"
    }
}

function generateTokenArray() {
    let tokenArray = new Array()

    for (let i =0; i < 8; i++){
        tokenArray[i] = new Array()
        for (let j = 0; j < 8; j++){
            tokenArray[i].push(getRandomColor())
        }
    }

    console.log(tokenArray)
    return tokenArray
}



export default generateTokenArray()