function ladybugs(arr) {
    let lengthField = arr.shift();
    let ladybugs = arr.shift().split(" ");
    let field = new Array(lengthField).fill(0);

    for (const n of ladybugs) {
        if (field[n] !== undefined) {
            field[n] = 1;
        }
    }
    
    function moveLeft(arr, index) {
        for (let i = index; i >= 0; i -= index) {
            if (arr[i] === 0) {
                arr[i] = 1;
                break;
            }
        }
        return arr;
    }

    function moveRight(arr, index) {
        for (let i = index; i < arr.length; i += index) {
            if (arr[i] === 0) {
                arr[i] = 1;
                break;
            }
        }
        return arr;
    }
    for (const commands of arr) {
        let [indexStart, direction, indexEnd] = commands.split(" ");
        indexStart = Number(indexStart);
        indexEnd = Number(indexEnd);
        if (field[indexStart] !== 0 && field[indexStart] !== undefined) {
            field[indexStart] = 0;
            direction == "left" 
            ? (field = moveLeft(field, (indexStart - indexEnd))) 
            : (field = moveRight(field, (indexStart + indexEnd)))
        } 
    }
    console.log(field.join(" "));
}
    



ladybugs([ 3, '0 1',
'0 right 1',
'2 right 1' ])
ladybugs([ 3, '0 1 2',
'0 right 1',
'1 right 1',
'2 right 1']
)
ladybugs([ 5, '3',
'3 left 2',
'1 left -2'])