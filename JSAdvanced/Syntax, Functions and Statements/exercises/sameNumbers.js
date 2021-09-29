function sameNumbers(num){
    let set = new Set(String(num))
    let flag = false
    if (set.size === 1){
        flag = true
    }
    num = String(num).split("") 
    let sum = num.reduce((a, b)=>a + Number(b), 0)
    console.log(`${flag}\n${sum}`)
}

sameNumbers(1234)