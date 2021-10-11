function calorie(arr) {
    let calories ={};
    while (arr.length){
        let product = arr.shift()
        if (!calories[product]){
            calories[product] = 0
        };
        calories[product] += Number(arr.shift());
    };
    return calories
}


console.log(calorie(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']
))