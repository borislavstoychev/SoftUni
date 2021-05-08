function firstLast(arr) {
    arr = arr.map(Number)
    return arr[0] + arr[arr.length - 1]
}

console.log(firstLast(['20', '30', '40']))
console.log(firstLast(['5', '10'])) 