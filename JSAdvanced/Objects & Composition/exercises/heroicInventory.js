function heroic(arr){
    let players = []
    arr.forEach(element => {
        [name, level, items] = element.split(' / ')
        players.push({
            name, 
            level: Number(level), 
            items: items ? items.split(', '): []})
    });
    return JSON.stringify(players)
}

console.log(heroic(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']))