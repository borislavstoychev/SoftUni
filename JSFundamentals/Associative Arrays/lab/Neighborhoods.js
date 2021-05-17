function neighborhoods(arr) {
    let street = arr.shift().split(", ");
    let map = new Map();
    street.forEach(element => {
        map.set(element, []);
    });
    arr.forEach(element => {
       let [str, name] = element.split(" - ");
       if (map.has(str)) {
            map.set(str, map.get(str).concat(name));
       }
       
    });
    let sorted = Array
    .from(map)
    .sort((a,b) => b[1].length - a[1].length);
    sorted.forEach(element => {
        console.log(`${element[0]}: ${element[1].length}`);
        if (element[1].length){
            console.log(`--${element[1].join("\n" + "--")}`);
        }
        
    });
}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
)