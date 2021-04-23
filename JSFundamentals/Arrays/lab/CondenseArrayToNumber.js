function condenseArray(array) {
    let condensed = [];

    function checkArray(array) {
        if (array.length > 1) {
            condenseArray(array)
        } else {
            console.log(array[0])
        }
    }
    for (let i = 0; i < array.length - 1; i++) {
        condensed.push(array[i] + array[i + 1])
    } if (condensed.length !== 0) {
        checkArray(condensed)
    } else {
        console.log(`${array[0]}`)
    }
    
}



condenseArray([2,10,3])
condenseArray([5,0,4,1,2])
condenseArray([1])