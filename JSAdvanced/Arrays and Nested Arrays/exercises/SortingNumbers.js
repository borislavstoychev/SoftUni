function sortingNum(arr) {
    let smalestFirst = arr.sort((a,b) => a-b);
    let result = []
    while (smalestFirst.length){
        result.push(smalestFirst.shift());
        result.push(smalestFirst.pop())
    };
    return result
}


console.log(sortingNum([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))