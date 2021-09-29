function roadRadar(speed, area){
    let rules = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }
    difference = Number(speed) - rules[area]
    if (difference <= 0){
        return  `Driving ${speed} km/h in a ${rules[area]} zone`
    } else if (difference <= 20){
        return `The speed is ${difference} km/h faster than the allowed speed of ${rules[area]} - speeding`
    } else if (difference <= 40){
        return `The speed is ${difference} km/h faster than the allowed speed of ${rules[area]} - excessive speeding`
    }else {
        return `The speed is ${difference} km/h faster than the allowed speed of ${rules[area]} - reckless driving`

    }
}


console.log(roadRadar(40, 'city'))
console.log(roadRadar(21, 'residential'))
console.log(roadRadar(120, 'interstate'))
console.log(roadRadar(200, 'motorway'))
