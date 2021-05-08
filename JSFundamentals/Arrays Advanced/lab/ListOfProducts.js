function listOfProducts(arr) {
    let index = 0;
    for(item of arr.sort()) {
        console.log(`${++index}.${item}`);
    }
}


listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"])