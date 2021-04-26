function orders(items, quantity) {
    const itemMap = {
        "coffee": 1.50,
        "water": 1.00,
        "coke": 1.40,
        "snacks": 2.00
    }
    return (itemMap[items] * quantity).toFixed(2)
}

console.log(orders('water', 5))
console.log(orders("coffee", 2))