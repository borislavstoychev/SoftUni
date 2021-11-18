function sortArray(list, cmd) {
    function result (){
        cmd === "asc" 
        ? list.sort((a,b) => a - b) 
        : list.sort((a,b) => b - a)
        return list
    }
    return result()
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'))
console.log(sortArray([14, 7, 17, 6, 8], 'desc'))