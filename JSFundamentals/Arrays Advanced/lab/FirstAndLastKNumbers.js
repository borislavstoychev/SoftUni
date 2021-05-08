function firstLast(arr) {
    let index = arr.shift()
    let first = arr.slice(0, index)
    let second = arr.slice(- index)
    return first.join(" ") + "\n" + second.join(" ")
}

console.log(firstLast([2, 
    7, 8, 9]))
console.log(firstLast([3,
    6, 7, 8, 9]))