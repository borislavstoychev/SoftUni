function sumOfNumbers(starNum, endNum){
    let result = 0;
    for (let i = Number(starNum); i<=Number(endNum); i++){
        result += i;
    }
    console.log(result)
}

sumOfNumbers('1', '5' )
sumOfNumbers('-8', '20' )
