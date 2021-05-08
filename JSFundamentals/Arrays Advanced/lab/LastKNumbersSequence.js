function lastNumbersOfSequence(num1, num2) {
    let result = [1];
    for (let i = 1; i < num1; i++) {
        result.push(
            result.slice(-num2)
            .reduce((a,b) => a+b)
            );
    }
    return result.join(" ");
}
console.log(lastNumbersOfSequence(6, 3))
console.log(lastNumbersOfSequence(8, 2))