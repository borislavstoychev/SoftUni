function repeatString (str, num) {
    let result = new Array(num).fill(str)

    return result.join("")
}

console.log(repeatString("abc", 
    3))
console.log(repeatString("String",
    2))