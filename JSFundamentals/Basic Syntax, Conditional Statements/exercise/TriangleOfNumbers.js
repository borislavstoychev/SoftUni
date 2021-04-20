// function solve(num) {
//     for (let i = 1; i <= num; i++) {
//         result = ""
//         for (let j = 1; j <= i; j++) {
//             result += i + " " 
//         }
//         console.log(result)
//     }
// }

function solve(n) {
    function displayItem(num) {
        let sequence = []
        for (let i = 1; i <= num; i++) {
            sequence.push(num)
        }
        return sequence.join(" ")
   
    } 
    for (let j = 1; j <= n; j++) {
        console.log(displayItem(j))
    }
}

solve(5)
