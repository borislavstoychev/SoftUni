function grade(num) {
    switch (true) {
        case (num < 3):
            return `Fail (2)`;
        case  (num < 3.50):
            return `Poor (${num.toFixed(2)})`;
        case  (num < 4.50):
            return `Good (${num.toFixed(2)})`;
        case ( num < 5.50):
            return `Very good (${num.toFixed(2)})`;
        case  (num <= 6):
            return `Excellent (${num.toFixed(2)})`;
    }
}

console.log(grade(3.33))
console.log(grade(4.50))
console.log(grade(2.90))