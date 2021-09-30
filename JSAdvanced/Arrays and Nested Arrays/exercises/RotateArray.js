function rotateArr(arr, n){
    while(n){
        arr.unshift(arr.pop())
        n-=1
    }
    return arr.join(" ")
}

console.log(rotateArr(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15))
