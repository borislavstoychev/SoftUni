let Person = require('./Person');

function solve(){
    let persons = [];
    persons.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'))
    persons.push(new Person('SoftUni', undefined, undefined, undefined))
    persons.push(new Person('Stephan', 'Johnson', 25, undefined))
    persons.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'))

    return persons
}

console.log(solve())