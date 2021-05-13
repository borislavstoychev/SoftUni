function inventory(arr) {
    let array = [];
    arr.forEach(element => {
        let [Hero, level, items] = element.split(" / ");
        level = Number(level);
        items = items.split(", ").sort((a,b) => a.localeCompare(b)).join(", ");
        array.push({
            Hero,
            level,
            items
        });
        
    });
    let filteredArr = array.sort((a, b) => a.level - b.level)
    array.forEach(element => {
        console.log(`Hero: ${element.Hero}
level => ${element.level}
items => ${element.items}`)
    });
}

inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]);