function wordOccurrence(arr) {
    let map = new Map();
    arr.forEach(element => {
       if (!map.has(element)) {
           map.set(element, 0);
       } 
       let item = map.get(element);
       item += 1;
       map.set(element, item);
    });
    let sorted = Array
    .from(map)
    .sort((a,b) => b[1] - a[1]);
    sorted.forEach(element => {
        console.log(`${element[0]} -> ${element[1]} times`);
    });
}

wordOccurrence(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);