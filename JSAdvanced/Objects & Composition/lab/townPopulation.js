function populatons(arr){
    let cities = {};
    arr.forEach(element => {
        let [city, populaton] = element.split(" <-> ")
        if (!cities[city]){
            cities[city] = 0
        }
        cities[city] += +populaton
    });
    for (let [c, p] of Object.entries(cities)){
       console.log(`${c} : ${p}`) 
    }
}

populatons(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Sofia <-> 2345000',
'Las Vegas <-> 1000000'])