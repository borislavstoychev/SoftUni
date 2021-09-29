function  fruit(str, weight, price){
    price = Number(price)
    weight = Number(weight/1000)
    console.log(`I need $${(price*weight).toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${str}.`)
}

fruit('apple', 1563, 2.35)