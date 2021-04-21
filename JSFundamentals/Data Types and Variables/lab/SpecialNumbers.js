function specialNumber(num) {
    let specialNumbers = [5, 7, 11]
    for (let i = 1; i <= num; i++) {
        let num = i.toString()
        let sum = 0
        for (const e of num) {
            sum += Number(e)
        }
        if (specialNumbers.includes(sum)) {
            console.log(`${i} -> True`)
        } else {
            console.log(`${i} -> False`)
        }
    }
}



specialNumber(15)