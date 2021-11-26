function solve(arr){
    let brands = {}
    arr.forEach(element => {
        let [brand, model, quantity] = element.split(" | ")
        quantity = Number(quantity)
        if (!brands[brand]){
            brands[brand] = new Map()
        }
        if(!brands[brand].has(model)){
            brands[brand].set(model, 0)
        }
        brands[brand].set(model, brands[brand].get(model) + quantity)
    });
    Object.entries(brands).forEach(element =>{
        console.log(element[0])
        element[1].forEach((value, key) => console.log(`###${key} -> ${value}`))
    })
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])