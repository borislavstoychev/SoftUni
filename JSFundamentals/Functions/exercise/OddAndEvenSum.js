function foo(num) {
    let evenSum = 0;
    let oddSum = 0;
    for (const n of String(num)) {
        Number(n) % 2 == 0 ? evenSum += Number(n) : oddSum += Number(n)
    }
    return ` Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(foo(1000435))
console.log(foo(3495892137259234))
