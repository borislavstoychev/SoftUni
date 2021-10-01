function matrix(arr){
    let result = [];
    arr.forEach(element => {
        result.push(element.reduce((a,b) => a+b,0))
    });
    
    for (let i= 0; i < arr.length; i++){
        let sum = 0;
        for (let j=0; j < arr.length; j++){
            sum += arr[i][j]
        }
        result.push(sum)
    }
    return new Set(result).size === 1 ? true : false
}

console.log(matrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]))

console.log(matrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]))

console.log(matrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]))

console.log(matrix([]))