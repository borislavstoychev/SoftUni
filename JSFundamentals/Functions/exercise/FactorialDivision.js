function factorialDivision (num1, num2) {

    function calculateFactorial(num) {

        let result = 1;
        for (let i = num; i > 0; i--) {
            result *= i;
        }
        return result;
    }

    return (calculateFactorial(num1) / calculateFactorial(num2)).toFixed(2);
}

console.log(factorialDivision(5, 2))
console.log(factorialDivision(6, 2))