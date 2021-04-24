function maxNumber(array) {
    let newArray = [];
    function checkMax(array, n) {
        for (let i = 0; i <= array.length; i++) {
            if (array[array.length - 1] <= n) {
                array.pop()
            } else {
                return array.push(n)
            }
        }
        return array.push(n)
    }
    for (const n of array) {
        checkMax(newArray, n)
    }
    console.log(newArray.join(" "))
}

// function foo(arr) {
//     return arr.filter((x, i) => arr.slice(i + 1).every((y) => x > y)).join(' ');
// }


foo([1, 4, 3, 2])
foo([14, 24, 3, 19, 15, 17])
foo([41, 41, 34, 20])
foo([27, 19, 42, 2, 13, 45, 48])