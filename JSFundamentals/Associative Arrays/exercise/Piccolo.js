function piccolo(arr) {
    let parking = new Map();
    arr.forEach(element => {
       let [command, num] = element.split(", ");
       if (command === "IN" && !parking.has(num)) {
           parking.set(num, command);
       }
       if (command == "OUT" && parking.has(num)) {
           parking.delete(num);
       }
    });
    let sorted = Array.
    from(parking)
    .sort((a,b) => a[0].localeCompare(b[0]))
    for (let [key, value] of sorted) {
        console.log(key);
    } 
    if (!sorted.length) {
        console.log("Parking Lot is Empty");
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)