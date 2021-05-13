function storeProvision(arr1, arr2) {
    let provision = {}
    function createObj(arr) {
        arr.forEach((element, index) => {
            if (index % 2 === 0) {
                if(provision[element]) {
                    provision[element] += Number(arr[index + 1]);
                } else {
                    provision[element] = Number(arr[index + 1]);
                }
            }
        });
    }
    createObj(arr1)
    createObj(arr2)
    Object.keys(provision).forEach(element => {
        console.log(`${element} -> ${provision[element]}`)
    });
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])
