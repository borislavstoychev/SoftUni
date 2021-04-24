function foo(arr) {
    let index = 'no';
    for (let i = 0; i < arr.length; i++) {
        const leftSum = arr.slice(0, i + 1).reduce((a, v) => a + v, 0);
        const rightSum = arr.slice(i).reduce((a, v) => a + v, 0);
        if (leftSum === rightSum) index = i;
    };
    console.log(index);
}
foo([1, 2, 3, 3])
foo([1, 2])
foo([1])
foo([1, 2, 3])
foo([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])