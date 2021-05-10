function train(arr) {
    let wagons = arr.shift()
    .split(" ")
    .map(Number);
    let capacity = Number(arr.shift());
    while (arr.length) {
        let commands = arr.shift()
        if (commands.includes("Add")){
            [command, num] = commands.split(" ")
            wagons.push(Number(num))
        } else {
            for (let i = 0; i < wagons.length; i++) {
                let passengers = wagons[i] + Number(commands)
                if (passengers <= capacity) {
                    wagons[i] = passengers;
                    break;
                }
            }
        }
    }
    return wagons.join(" ");
}

console.log(train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']))
console.log(train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']))

