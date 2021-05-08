function oddNums(arr) {
    let oddPosition = arr
    .filter((v,i) => i % 2 !==0)
    .map(a => a*2)
    return oddPosition.reverse().join(" ")
}

console.log(oddNums([10, 15, 20, 25]))
console.log(oddNums([3, 0, 10, 4, 7, 3]))