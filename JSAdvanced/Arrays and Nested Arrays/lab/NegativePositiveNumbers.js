function numbers(arr){
    let result = [];
    for (number of arr){
        if (number < 0){
            result.unshift(number)
        }else{
            result.push(number)
        }
    }
    console.log(result.join("\n"))
}

numbers([3, -2, 0, -1])