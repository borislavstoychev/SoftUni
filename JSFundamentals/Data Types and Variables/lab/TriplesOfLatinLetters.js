function latinLetters(num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            for (let k = 0; k < num; k++) {
                let letterI = String.fromCharCode(97 + i)
                let letterJ = String.fromCharCode(97 + j)
                let letterK = String.fromCharCode(97 + k)
                console.log(letterI + letterJ + letterK)
            }
        }
    }
}

latinLetters(3)