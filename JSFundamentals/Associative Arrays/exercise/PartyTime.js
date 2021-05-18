function partyTime(arr) {
    let vip = [];
    let regular = [];
    while (arr.length) {
        let element = arr.shift();
        if (element === "PARTY") {
            break;
        }else if (Number(element.charAt(0))){
            vip.push(element);
        } else {
            regular.push(element);
        }
    }
    arr.forEach(element => {
        if (vip.includes(element)) {
            vip.splice(vip.indexOf(element),1);
        } else if (regular.includes(element)){
            regular.splice(regular.indexOf(element), 1);
        }
    });
    console.log(vip.length + regular.length);
    console.log(`${vip.join("\n")}`);
    console.log(`${regular.join("\n")}`);
}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'tSzE5t0p',
'7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
)
