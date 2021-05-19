function arenaTier(arr) {
    let arena = {};
    
    function sortByName(a, b) {
        return a.localeCompare(b);
    }

    function sortBySum(objA, objB) {
        let sumB = Object.entries(objB).reduce((a,v) => a += v[1], 0);
        let sumA = Object.entries(objA).reduce((a,v) => a += v[1], 0);
        return  sumB - sumA;
    }

    function sumSkills(arr) {
        return arr.reduce((a,v) => a += v[1], 0);
    }

    function printTechnique(arr) {
        return arr.reduce((a, v) => a += `\n- ${v[0]} <!> ${v[1]}`, "");
    }

    function figth(glad1, glad2) {
        let technique1 = arena[glad1];
        let technique2 = arena[glad2];
        if (technique2 !== undefined && technique1 !== undefined) {
            for (let key in technique1) {
                if (technique2.hasOwnProperty(key)) {
                    technique2[key] > technique1[key] 
                    ? delete arena[glad1] 
                    : delete arena[glad2];
                }
            }
        } 
    }
    while (true) {
        let command = arr.shift();
        if (command === 'Ave Cesar') break;
        else if (command.includes("->")) {
            let [name, technique, skill] = command.split(" -> ");
            if (arena[name] === undefined) arena[name] = {};
            if (arena[name][technique] === undefined) arena[name][technique] = +skill;
            if (arena[name][technique] < +skill) arena[name][technique] = +skill;
        }
        else if (command.includes("vs")) {
            let [gladiator1, gladiator2] = command.split(" vs ");
            figth(gladiator1, gladiator2);
        }
    }
    let players = {};
    Object.entries(arena)
    .sort((a, b) => sortBySum(a[1], b[1]) !== 0 ? sortBySum(a[1], b[1]) : sortByName(a[0], b[0]))
    .forEach(element => {
        element[1] = Object.entries(element[1])
        .sort((a,b) => b[1] - a[1] !== 0 ? b[1] - a[1] : sortByName(a[0], b[0]));
        players[element[0]] = element[1]
    })
    Object.entries(players)
    .forEach(element => {
        console.log(`${element[0]}: ${sumSkills(element[1])} skill${printTechnique(element[1])}`)
    });
}

arenaTier([
'Pesho -> Duck -> 400',
'Julius -> Shield -> 150',
'Gladius -> Heal -> 200',
'Gladius -> Support -> 250',
'Gladius -> Shield -> 250',
'Peter vs Gladius',
'Gladius vs Julius',
'Gladius vs Maximilian',
'Ave Cesar'
])