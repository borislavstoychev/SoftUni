function game(arr){
    let first = 'X';
    let second = 'O';
    const matrix = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    const diagonals = (matrix) => matrix.reduce((a, v, i) => a + v[i], '');
    const col = (matrix, i) => matrix[i].reduce((a, b, j) => a + matrix[j][i], '');
    const row = (matrix, i) => matrix[i].reduce((a, v) => a + v, '');

    function print(player, matrix){
        let matrixToPrint = []
        matrix.forEach((el) => {
            matrixToPrint.push(el.join('\t'))
        });
        if (!player){
            return `The game ended! Nobody wins :(\n${matrixToPrint.join('\n')}`
        };
        return `Player ${player} wins!\n${matrixToPrint.join('\n')}`
    };

    let current = 1;

    while (current < 10){
        let [x, y] = arr.shift().split(" ")
        if (!matrix[x][y]) {
            current % 2 === 0 ? matrix[x][y] = second : matrix[x][y] = first
            current ++
        }else{
            console.log('This place is already taken. Please choose another!')
        }
        if (new Set(diagonals(matrix)).size === 1){
            return print(matrix[x][y], matrix)
        }else if (new Set(diagonals(matrix.slice().reverse())).size === 1){
            return print(matrix[x][y], matrix);
        }else if (new Set(row(matrix, x)).size === 1){
            return print(matrix[x][y], matrix);
        }else if (new Set(col(matrix, y)).size === 1){
            return print(matrix[x][y], matrix);
        };
        
    };
    return print(null, matrix);
};


console.log(game(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
));

console.log(game(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]))

console.log(game(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]))