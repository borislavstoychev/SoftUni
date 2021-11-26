function juiceFlavors(arr){
    let bottles = new Map()
    let store = new Map()
    arr.forEach(element => {
       let [juce, quantity] = element.split(" => ")
       quantity = Number(quantity)
       if (!store.has(juce)) {
           store.set(juce, 0)
       }
       store.set(juce, store.get(juce) + quantity)
       if (store.get(juce) >= 1000){
           if(!bottles.has(juce)){
               bottles.set(juce, 0);
           }
           let numOfBottles = Math.trunc(store.get(juce) / 1000)
           bottles.set(juce, bottles.get(juce) + numOfBottles)
           store.set(juce, store.get(juce) % 1000)
       } 
    });
    bottles.forEach((value, key) => console.log(`${key} => ${value}`))
}

juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])