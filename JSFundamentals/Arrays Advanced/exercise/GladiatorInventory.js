function gladiatorInventory(arr) {
    let inventory = arr.shift().split(" ");
    const actions = {
        Buy: (equipment) => buy(equipment),
        Trash: (equipment) => trash(equipment),
        Repair: (equipment) => repair(equipment),
        Upgrade: (param) => upgrade(param)
    };

    function buy(eq) {
        if (!inventory.includes(eq)) {
            inventory.push(eq);
        }
        
    }

    function trash(eq) {
        if (inventory.includes(eq)){
            inventory = inventory.filter((x) => x !== eq);
        }
    }

    function repair(eq) {
        if (inventory.includes(eq)) {
            inventory = inventory.filter((x) => x !== eq);
            inventory.push(eq);
        }
    }

    function upgrade(param) {
        let [eq, up] = param.split("-")
        if (inventory.includes(eq)) {
            inventory.splice(inventory.indexOf(eq) + 1, 0, `${eq}:${up}`);
        }
    }

    arr.forEach(element => {
        const [action, param1] = element.split(' ');
        actions[action](param1);
    });
    console.log(inventory.join(" "));
}

// gladiatorInventory(['SWORD Shield Spear',
// 'Buy Bag',
// 'Trash Shield',
// 'Repair Spear',
// 'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
)