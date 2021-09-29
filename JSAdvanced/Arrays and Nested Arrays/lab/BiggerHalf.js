function biggerHalf(arr){
    let lenArr = Math.ceil(arr.length/2);
    return arr
    .sort((a, b) => a-b)
    .slice(-lenArr);
}


biggerHalf([3, 19, 14, 7, 2, 19, 6])