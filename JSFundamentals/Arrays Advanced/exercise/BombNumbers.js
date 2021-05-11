function bombNums(arr1, arr2) {
    let [bomb, power] = [arr2[0], arr2[1]]
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === bomb) {
            arr1.splice(i - power > 0 ? i - power : 0, power * 2 + 1);
            i = 0;
        }
    }

    return arr1.reduce((a, v) => a + v, 0);
}

console.log(bombNums([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]))
console.log(bombNums([1, 7, 7, 1, 2, 3],
    [7, 1]))
console.log(bombNums([1, 4, 4, 2, 8, 9, 1],
    [1, 3]))
console.log(bombNums([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]))