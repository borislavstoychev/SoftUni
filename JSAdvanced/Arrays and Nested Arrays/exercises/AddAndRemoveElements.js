function addAndRemove(arr){
    let result = [];
    arr.forEach((element, i) => {
        element === 'add'? result.push(i+1) : result.pop()
    });
    return result.length ? result.join('\n'): 'Empty'
}


console.log(addAndRemove(['remove', 
'remove', 
'remove']
))