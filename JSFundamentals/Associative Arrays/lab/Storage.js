function storage(arr) {
    let store = new Map();
    arr.forEach(element => {
       let [key, value] = element.split(" ");
       if (store.has(key) === false) {
           store.set(key, 0);
       }
       let current = store.get(key);
       current += Number(value);
       store.set(key, current);
    });
    for (let key of store){
        console.log(`${key[0]} -> ${key[1]}`);
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40',
"olives 105"]);