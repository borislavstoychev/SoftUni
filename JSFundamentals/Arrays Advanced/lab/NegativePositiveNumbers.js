function negativeOrPositive(arr) {
    let result = []
    for (num of arr) {
        num >= 0 
        ? result.push(num) 
        : result.unshift(num)
    }
    return result.join("\n")
}
console.log(negativeOrPositive([7, -2, 8, 9]))
console.log(negativeOrPositive([3, -2, 0, -1]))