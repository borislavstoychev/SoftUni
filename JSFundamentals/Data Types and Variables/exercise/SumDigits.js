function sumDigits(num) {
    let sum = 0
    for (const n of num.toString()) {
        sum += Number(n)
    } 
    console.log(sum)
}

sumDigits(245678)
sumDigits(97561)
sumDigits(543)