function trip(distance, passeengers, price) {
    let neededFule = (distance / 100) * 7;
    neededFule += passeengers * 0.1;
    let money = neededFule * price
    console.log(`Needed money for that trip is ${money}lv.`)
}

trip(260, 9, 2.49)
trip(90, 14, 2.88)