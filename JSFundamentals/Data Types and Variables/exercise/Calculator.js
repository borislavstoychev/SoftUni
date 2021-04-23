function calculator(num, operator, num1) {
    let dict = {
        "+": (num + num1),
        "-": num - num1,
        "*": num * num1,
        "/": num / num1
    }
    console.log(`${dict[operator].toFixed(2)}`)
}

calculator(5,
'+',
10)
calculator(25.5,
    '-',
    3)