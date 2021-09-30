function incraseSubset(arr){
    return arr.reduce((a,b,i) => {
        a[a.length -1] <= b || i===0 ? a.push(b) : a;
        return a 
    },[]);
}

console.log(incraseSubset([1, 
    2, 
    3,
    4]))