function perfectNum (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) sum += i
    }
    return sum / 2 === num ? `We have a perfect number!` : `It's not so perfect.`;
}

console.log(perfectNum(1236498))