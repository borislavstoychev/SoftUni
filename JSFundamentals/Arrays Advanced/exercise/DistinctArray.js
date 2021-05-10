// function distinctArray(arr) {
//     return arr
//     .filter((element,index) => arr.indexOf(element) == index)
//     .join(" ");
// }

function distinctArray(arr) {
    return arr
    .reduce((unique, item) => 
        unique.includes(item) ? unique : [...unique, item], [])
    .join(" ")
}

console.log(distinctArray([1, 2, 3, 4, 1, 1]));
console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]));
console.log(distinctArray([20, 8, 12, 13, 4, 4, 8, 5]));