function solve(country) {
english = ['England', 'USA']
spanish = ['Spain', 'Argentina', 'Mexico']
if (english.includes(country)) {
    console.log("English")
} else {
    if (spanish.includes(country)) {
        console.log("Spanish")
    } else {
        console.log("unknown")
    }
}
}


solve("USA")
solve("England")
solve("Spain")
solve("brbr")