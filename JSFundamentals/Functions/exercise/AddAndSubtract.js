function addEndSubstract(...args) {
    let lest = args.pop()
    return args.reduce((a,b) => (a+b)) - lest
}

console.log (addEndSubstract(23,
    6,
    10))
console.log (addEndSubstract(1,
    17,
    30))
console.log (addEndSubstract(42,
    58,
    100))