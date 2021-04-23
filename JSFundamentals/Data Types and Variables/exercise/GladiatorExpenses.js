function gladiator(lostFiights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalPrice = 0
    for (let i = 1; i <= lostFiights; i++){
        if (i % 2 == 0) {
            totalPrice += helmetPrice
        } if (i % 3 == 0) {
            totalPrice += swordPrice
        } if (i % 2 == 0 && i % 3 == 0) {
            totalPrice += shieldPrice
        } if (i % 12 == 0) {
            totalPrice += armorPrice
        }
    }
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`)
}

gladiator(7,
    2,
    3,
    4,
    5
    )
gladiator(23,
    12.50,
    21.50,
    40,
    200)