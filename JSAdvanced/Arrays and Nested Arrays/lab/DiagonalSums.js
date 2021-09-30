function diagonalSum(arr) {
    const result = (arr) => arr.reduce((a, v, i) => a + v[i], 0);
    return `${result(arr)} ${result(arr.reverse())}`;
}

console.log(diagonalSum([[3, 5, 17],
    [-1, 7, 14],[1, -8, 89]]))