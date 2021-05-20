function legendaryFarming(str) {
    let legendaryItems = {
        "shards": "Shadowmourne",
        "fragments": "Valanyr",
        "motes": "Dragonwrath"
    };
    let materials = {};
    let arr = str.split(" ").map((x) => x.toLowerCase());
    for (let i = 0; i < arr.length - 1; i++) {
        if (i % 2 === 0){
            let [quantity, material] = [arr[i], arr[i + 1]];
            if (materials[material] === undefined) materials[material] = 0;
            materials[material] += +quantity;
            if (legendaryItems.hasOwnProperty(material)){
                if (materials[material] >= 250){
                    materials[material] -= 250;
                    console.log(`${legendaryItems[material]} obtained!`)
                    break;
                }
            }
        }
    }
    let specialMaterial = {};
    for (let key in legendaryItems) {
        if (materials[key] === undefined) materials[key] = 0;
        specialMaterial[key] = materials[key];
    }
    Object.entries(specialMaterial)
    .sort((a,b) => b[1] - a[1] !== 0 ? b[1] - a[1] : a[0].localeCompare(b[0]))
    .forEach(element => {
        console.log(`${element[0]}: ${element[1]}`)
    });

    let junked = {};
    for (let key in materials) {
        if (!legendaryItems.hasOwnProperty(key)) {
            junked[key] = materials[key]
        }
    }
    Object.entries(junked)
    .sort((a,b) => a[0].localeCompare(b[0]))
    .forEach(element => {
        console.log(`${element[0]}: ${element[1]}`);
    });
}

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')