function travelTime(arr) {
    let obj = {};
    arr.forEach(element => {
       let [country, town, cost] = element.split(" > ");
       if (!obj.hasOwnProperty(country)) {
           obj[country] = {};
       }
       if (obj[country][town] < cost) {
           cost = obj[country][town];
       }
       obj[country] = Object.assign(obj[country], {[town]: cost});
    });
    for (let country in obj) {
       obj[country] =  Object.entries(obj[country]).sort((a,b) => Number(a[1]) - Number(b[1]));
    }
    Object.entries(obj)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(element => {
        console.log(`${element[0]} -> ${element[1].reduce((a, v) => (a += `${v[0]} -> ${v[1]} `), '')}`);
    });  
}

travelTime([
    "Bulgaria > Sofia > 200",
    "Bulgaria > Sopot > 8000",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 500"
    ]);