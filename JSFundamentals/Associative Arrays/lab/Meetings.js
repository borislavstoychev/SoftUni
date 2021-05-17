function meeting(arr) {
    const meet = {};
    arr.forEach(element => {
        let [day, name] = element.split(" ");
        if (Object.keys(meet).includes(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meet[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    });
    for (let key in meet) {
        console.log(`${key} -> ${meet[key]}`);
    }
}

meeting(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])