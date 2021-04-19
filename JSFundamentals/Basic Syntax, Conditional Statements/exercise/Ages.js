function solve(n) {
    if (n < 0) {
        console.log("out of bounds")
    } else if (n <= 2) {
        console.log("baby")
    } else if (n <= 13) {
        console.log("child")
    } else if (n <= 19) {
        console.log("teenager")
    } else if (n <= 65) {
        console.log("adult")
    } else {
        console.log("elder")
    }
}

solve(20)
solve(2)
solve(100)
solve(-100)