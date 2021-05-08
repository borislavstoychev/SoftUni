function arrManipulations(args) {
    let myArr = args
    .shift()
    .split(" ")
    .map(Number)
    for (commands of args) {
        let [command, firstN, secondN] = commands.split(" ");
        firstN = Number(firstN)
        secondN = Number(secondN)
        switch (command) {
            case "Add":
                myArr.push(firstN);
                break;
            case "Remove":
                for (let i = 0; i < myArr.length; i++) {
                    if (myArr[i] === firstN) {
                        myArr.splice(i, 1)
                    }
                }
                break;
            case "RemoveAt":
                myArr.splice(firstN, 1)
                break;
            case "Insert":
                myArr.splice(secondN, 0, firstN);
                break;
        }
    }
    return myArr.join(" ")
}

console.log(arrManipulations(['4 19 2 53 6 43 2',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'
]))