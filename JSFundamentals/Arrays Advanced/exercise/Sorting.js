function sorting(arr) {
    let bigest = arr.sort((a,b) => b-a).join(" ").split(" ");
    let result = [];
    while(bigest.length) {
        result.push(bigest.shift());
        result.push(bigest.pop());
    }
    console.log(result.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);