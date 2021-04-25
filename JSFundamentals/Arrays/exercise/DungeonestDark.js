function dungeonestDark(arr) {
    let health = 100
    let coins = 0
    let bestRoom = 0
    for (const e of arr[0].split("|")) {
        bestRoom += 1
        let input = e.split(" ");
        let action = input[0];
        let quantity = Number(input[1]);
        if (action == "potion") {
            health += quantity;
            if (health > 100) {
                health -= quantity;
                quantity = 100 - health;
                health = 100;
            }
            console.log(`You healed for ${quantity} hp.`)
            console.log(`Current health: ${health} hp.`)
        } else if (action === "chest") {
                coins += quantity
                console.log(`You found ${quantity} coins.`)
        } else {
            health -= quantity;
            if (health <= 0) {
                console.log(`You died! Killed by ${action}.`)
                break;
            } else {
                console.log(`You slayed ${action}.`)
            }
        }
    } if(health <= 0) {
        console.log(`Best room: ${bestRoom}`)
    } else {
        console.log(`You've made it!`)
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
    }
    
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])

