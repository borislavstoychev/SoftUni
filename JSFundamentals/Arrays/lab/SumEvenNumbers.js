function sumEvenNumbers(array) {
    sum = 0
    for (const n of array) {
        if (Number(n) % 2 == 0) {
            sum += Number(n)
        }

    }
    console.log(sum)
}
sumEvenNumbers(['1','2','3','4','5','6'])
sumEvenNumbers(['3','5','7','9'])
sumEvenNumbers(['2','4','6','8','10'])