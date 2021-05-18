function cardGame(arr) {
    let cards = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };
    let powers = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1
    };
    let obj = {};
    arr.forEach(element => {
       let [key, value] = element.split(": ");
       if (!obj.hasOwnProperty(key)) {
            obj[key] = [];
       }
       let set = obj[key];
       value.split(', ').forEach(el => {
           if (!set.includes(el)) {
               set.push(el);
           }
       });
       obj[key] = set;
    });
    let map = new Map;
    for (let key in obj) {
        let result = 0;
        obj[key].forEach(element => {
            let power = element.slice(-1);
            let card = element.slice(0, -1);
            result += cards[card] * powers[power];
        });
        map.set(key, result);
    }
    for (let [key, value] of map) {
        console.log(`${key}: ${value}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD',
    'Boko: 2C, 4H, 9H, AS, QS',
    'Shoko: 3H, 10S, JC, KD, 5S, 10S',
    'Moko: QH, QC, QS, QD',
    'Shoko: 6H, 7S, KC, KD, 5S, 10C',
    'Moko: QH, QC, JS, JD, JC',
    'Boko: JD, JD, JD, JD, JD, JD'
    ])