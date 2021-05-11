function arrManipulator(arr, commands) {
    const actions = {
        add: (i, el) => add(i,el),
        addMany: (i, el) => add(i,el),
        contains: (el) => contains(el),
        remove: (index) => remove(index),
        shift: (index) => shift(index),
        sumPairs: () => sumPairs(),
        print: () => print()
    };

    function add(i, e) {
        arr.splice(i, 0, ...e.map(Number));
    }

    function contains(e) {
        console.log(arr.indexOf(e));
    }

    function remove(i) {
        arr.splice(i, 1);
    }

    function shift(i) {
        for (let j = 0; j < i; j++){
            arr.push(arr.shift());
        }
    }

    function sumPairs() {
        let result = []
        for (let i = 0; i < arr.length; i+=2) {
            result.push(arr[i +1] ? arr[i] + arr[i+1] : arr[i]);
        }
        arr = result;
    }

    function print() {
        if (arr.length) {
            console.log(`[ ${arr.join(", ")} ]`);
        } else {
            console.log("[]");
        }
        
    }

    for (x of commands) {
        const [action, param1, ...param2] = x.split(' ');
        actions[action](Number(param1), param2);
        if (action === "print") {
            break;
        }
    }
}

arrManipulator([1, 2, 3, 4, 5],
    ["addMany 5 9 8 7 6 5", "contains 15","print", "remove 3", "shift 1", "print"])

    