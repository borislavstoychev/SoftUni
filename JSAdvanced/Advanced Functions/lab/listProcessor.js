function solve(input) {
    let list = [];
    const listCreator = (cmd, el) => {
        let result = {
            add: () => list.push(el),
            remove: () => list = list.filter((x) => x !== el),
            print: () => console.log(list.join(',')),

        }
        result[cmd]()
        return list
    };
    input
        .map((x) => x.split(' '))
        .map(([cmd, text]) => listCreator(cmd, text));
}

solve(["add hello", "add again", "remove hello", "add again", "print"]);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])