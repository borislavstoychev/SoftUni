function minerTask(arr) {
    let task = {};
    arr.forEach((element, index) => {
        if (index % 2 === 0){
            let [resource, quantity] = [element, arr[index + 1]];
        if (task[resource] === undefined) task[resource] = 0;
        task[resource] += +quantity;
        }
        
    });
    for (let key in task) {
        console.log(`${key} -> ${task[key]}`);
    }
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ])