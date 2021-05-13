function employees(arr) {
    let obj = {}
    arr.forEach(element => {
       obj[element] = element.length
    });
    Object.keys(obj).forEach(element => {
        console.log(`Name: ${element} -- Personal Number: ${obj[element]}`)
    });
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])