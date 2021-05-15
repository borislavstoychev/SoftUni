function phoneBook(arr) {
    let book = {};
    arr.forEach(element => {
       let [key, value] = element.split(" ");
       book[key] = value; 
    });
    for (let key in book) {
        console.log(`${key} -> ${book[key]}`);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])