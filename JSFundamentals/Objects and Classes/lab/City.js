function city(myObj) {
    Object.keys(myObj).forEach(element => {
        console.log(`${element} -> ${myObj[element]}`)
    });
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})