function signCheck(num1, num2, num3) {
    if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
        return "Positive"
    } else if (num1 === 0 || num2 === 0 || num3 === 0) {
        return "Positive"
    } else if (num1 <= 0 && num2 <= 0 && num3 >= 0) {
        return "Positive"
    } else if (num1 >= 0 && num2 <= 0 && num3 <= 0) {
        return "Positive"
    } else if (num1 <= 0 && num2 >= 0 && num3 <= 0) {
        return "Positive"
    } else {
        return "Negative"
    }
}

console.log(signCheck(5,
    12,
    -15
    ))
console.log(signCheck(-6, -12, 14))
console.log(signCheck(-1, -2, -3))
console.log(signCheck(-1, 0, 1))
