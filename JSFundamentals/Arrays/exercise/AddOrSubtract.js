function addOrSubstract(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            newArray.push(array[i] + i)
        } else {
            newArray.push(array[i] - i)
        }
    }
    console.log(newArray)
    console.log(array.reduce((a, b) => a + b, 0))
    console.log(newArray.reduce((a, b) => a + b, 0))
}

addOrSubstract([5, 15, 23, 56, 35])
addOrSubstract([-5, 11, 3, 0, 2])