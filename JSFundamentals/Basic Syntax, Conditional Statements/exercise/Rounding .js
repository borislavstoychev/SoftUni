function solve(n, precision) {
    if (precision > 15) {
        precision = 15;
    }
    n = parseFloat(n.toFixed(precision))
    console.log(n)
}

solve(3.1415926535897932384626433832795,2)
solve(10.555555, 3)