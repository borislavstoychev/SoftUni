function solve(n) {
    numbers = []
    num = 1
    while (numbers.length < n){
        if (num % 2 !== 0) {
            numbers.push(num)
            console.log(num)
        }
        num++
    }
    console.log(`Sum: ${numbers.reduce((a, b) => a + b, 0)}`)
}

solve(5)
solve(3)