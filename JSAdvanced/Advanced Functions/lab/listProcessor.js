function solve(input) {
    const listCreator = () => {
        let list = [];
        return {
            add: (el) => list.push(el),
            remove: (el) => list = list.filter((x) => x !== el),
            print: () => console.log(list.join(',')),
        };
    };
    const listHandler = listCreator();
    input
        .map((x) => x.split(' '))
        .map(([cmd, text]) => listHandler[cmd](text));
}

solve(["add hello", "add again", "remove hello", "add again", "print"]);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']
)