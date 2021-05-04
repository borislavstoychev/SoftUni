function charactersInRange(...args) {
    let start = args[0].charCodeAt()
    let end = args[1].charCodeAt()
    const displayArr = []
    function display(s, e) {
        for(let i = s + 1; i < e; i++) {
            displayArr.push(String.fromCharCode(i));
        }
    }
    start < end ? display(start, end) : display(end, start)
    return displayArr.join(" ");
}


console.log(charactersInRange('a',
'd'))
console.log(charactersInRange('#',
':'))
console.log(charactersInRange('C',
'#'))
