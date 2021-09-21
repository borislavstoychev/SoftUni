function stringLength(...param) {
    let result = 0
    for (let p of param){
        result += p.length
    }
    console.log(`${result}\n${Math.floor(result/param.length)}`)
}

stringLength('chocolate', 'ice cream', 'cake')
stringLength('pasta', '5', '22.3')
