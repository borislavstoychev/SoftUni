function lowestPrice(arr){
    const products = {};
    arr.forEach(element => {
        let [town, product, price] = element.split(' | ');
        price = Number(price);
        if (!products[product]){
            products[product] = {}
        }
        products[product][town] = price    
    });
    for (const product in products) {
        sorted = Object.entries(products[product]).sort((a,b) => a[1]-b[1])[0]
        console.log(
            `${product} -> ${sorted[1]} (${sorted[0]})`
        );
    }
};


lowestPrice(['Sofia City | Audi | 100000',
   'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'])