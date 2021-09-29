function lastK(n, k){
    const  result = [1]
    for (let i =1; i<n; i++ ){
        result.push(result.slice(-k).reduce((a, v) => a + v, 0))
    }
    return result
}


console.log(lastK(6,3))