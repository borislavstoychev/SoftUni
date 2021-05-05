function loadingBar(num) {
    const bar = new Array(num/10).fill("%")
    if (bar.length < 10) {
        for (let i = bar.length; i < 10; i++) {
            bar.push(".")
        }
        console.log (`${num}% [${bar.join("")}]`)
        console.log("Still loading...")
    } else {
        console.log("100% Complete!")
        console.log("[%%%%%%%%%%]")
    }
}
loadingBar(30)
loadingBar(50)
loadingBar(100)