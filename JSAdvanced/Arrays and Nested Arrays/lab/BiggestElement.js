function biggestElement(arr) {
    return Math.max(...arr.reduce((list, element) => {
        list.push(Math.max(...element));
        return list
}, []));
};

console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]))