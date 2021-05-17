function addressBook(arr) {
    const book = {};
    arr.forEach(element => {
       let [name,addres] = element.split(":");
       book[name] = addres
    });
    let sorted = Object.entries(book).sort((a, b) => a[0].localeCompare(b[0]));
    sorted.forEach(element => {
        let [key,value] = element
        console.log(`${key} -> ${value}`);
    });
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);