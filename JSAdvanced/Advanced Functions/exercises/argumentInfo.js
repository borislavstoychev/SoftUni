function argumentInfo(...params){
    const arguments = {};
    params.forEach(el =>{
        arguments[typeof el] 
        ? ++arguments[typeof el] 
        : arguments[typeof el] = 1
        console.log(`${typeof el}: ${el}`) 
    })
    Object.keys(arguments)
    .sort((a,b) => arguments[b] - arguments[a])
    .forEach(el => {
        console.log(`${el} = ${arguments[el]}`)
    })

}

// argumentInfo('cat', 42, function () { console.log('Hello world!'); })
argumentInfo({ name: 'bob'}, 3.333, 9.999)