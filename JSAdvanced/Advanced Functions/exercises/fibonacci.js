function getFibonator(){
    let prev = 0;
    let cur = 1;
    function solve() {
        let result = prev + cur;
        prev = cur
        cur = result
        return prev
    }
    return solve

}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13