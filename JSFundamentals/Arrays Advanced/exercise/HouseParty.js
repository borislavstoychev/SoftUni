function houseParty(arr) {
    let party = [];
    while (arr.length) {
        let action = arr
        .shift()
        .split(" ");
        let name = action.shift();
        action.includes("not") 
        ? party.includes(name) ? party.splice(party.indexOf(name), 1) : console.log(`${name} is not in the list!`) 
        : party.includes(name) ? console.log(`${name} is already in the list!`) : party.push(name);
    }
    console.log(party.join("\n"));
}

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])