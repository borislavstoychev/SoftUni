function convertToObject(str) {
    let person = JSON.parse(str);
    Object.keys(person).forEach(element => {
        console.log(`${element}: ${person[element]}`)
    });
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
