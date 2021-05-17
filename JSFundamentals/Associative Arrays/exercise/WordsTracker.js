function wordsTracker(arr) {
    let words = arr.shift().split(" ");
    let map = new Map();
    words.forEach(element => {
        map.set(element, 0)
    });
    arr.forEach(element => {
       if(map.has(element)) {
           let value = map.get(element);
           value += 1;
           map.set(element, value);
       } 
    });
    sorted = Array.from(map).sort((a,b) => b[1] - a[1]);
    sorted.forEach(el => {
        console.log(`${el[0]} - ${el[1]}`);
    });
}

wordsTracker([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ])