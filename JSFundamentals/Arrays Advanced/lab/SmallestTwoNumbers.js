function smalestTowNums(arr) {
    return arr
    .sort((a,b) => a-b)
    .slice(0, 2)
    .join(" ");
}

console.log(smalestTowNums([30, 15, 50, 5]));
console.log(smalestTowNums([3, 0, 10, 4, 7, 3]));