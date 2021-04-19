function solve(start, end) {
    result = []
    for (let i = start; i <= end; i++){
        result.push(i)
    }
    console.log(result.join(" "))
    console.log(`Sum: ${result.reduce((a,b) => a + b, 0)}`)
}

solve(5, 10)
solve(0, 26)
solve(50, 60)