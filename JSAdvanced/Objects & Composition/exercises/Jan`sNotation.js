function notation(arr) {
    let elements = [];
    const actions = {
        '+': (x, y) => {
            return x + y;
        },
        '-': (x, y) => {
            return x - y;
        },
        '*': (x, y) => {
            return x * y;
        },
        '/': (x, y) => {
            return x / y;
        },
    }
    for(let element of arr) {
        if (actions[element]){
            let [x,y] = elements.splice(-2)
            if (y === undefined){
                return `Error: not enough operands!`
            }
            elements.push(actions[element](x,y))
        }else{
            elements.push(element)
        }
    };
    if(elements.length > 1){
        return `Error: too many operands!`
    }
    return elements.join('')
}



console.log(notation([3,
    4,
    '+']))