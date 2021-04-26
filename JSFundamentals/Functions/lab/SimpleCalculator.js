function simpleCalculator(numOne, numTwo, operator) {
    
    const calculator = {
        "multiply": numOne * numTwo,
        "divide": numOne / numTwo,
        "add": numOne + numTwo,
        "subtract": numOne - numTwo
    }
    return calculator[operator]
}

const print = function(n, n1, op) {
    console.log(simpleCalculator(n, n1, op));
}
print(5, 5, 'multiply')
print(5, 5, 'divide')
print(5, 5, 'add')
print(5, 5, 'subtract')
