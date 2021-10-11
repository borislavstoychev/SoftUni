function town(arr){
    let result = []
    let [keyT, keyL1,keyL2] = arr.shift().slice(2,-2).split(" | ")
    arr.forEach(element => {
        let obj = {};
        let [t,l1,l2]= element.slice(2,-2).split(" | ")
        l1 = Number(l1).toFixed(2)
        l2 = Number(l2).toFixed(2)
        obj[keyT] = t;
        obj[keyL1] = Number(l1)
        obj[keyL2] = Number(l2)
        result.push(obj)
    });
    console.log(JSON.stringify(result))
}


town(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])