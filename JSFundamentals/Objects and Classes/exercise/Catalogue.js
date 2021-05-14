function catalogues(arr) {
    let catalogue = new Map();
    arr.forEach(element => {
        [keys, values] = element.split(" : ");
        catalogue.set(keys, values)
    });
    let sorted = Array.from(catalogue.entries())
        .sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));
    let result = {};
    sorted.forEach(element => {
        [key, value] = element;
        let letter = key.charAt(0);
        if (!result.hasOwnProperty(letter)) {
            result[letter] = []
        }
        result[letter].push(`${key}: ${value}`)
    });
    for (let key in result) {
        console.log(`${key}\n  ${result[key].join('\n  ')}`);
    }
}

catalogues(["Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"])