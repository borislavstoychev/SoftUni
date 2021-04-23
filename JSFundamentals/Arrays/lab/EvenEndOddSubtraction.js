function substraction(array) {
    let sumOdd = 0;
    let sumEven = 0
    for (const n of array) {
        if (n % 2 == 0) {
            sumEven += Number(n)
        } else {
            sumOdd += Number(n)
        }
    }
    console.log(sumEven - sumOdd)
}

substraction([1,2,3,4,5,6])
substraction([3,5,7,9])
substraction([2,4,6,8,10])