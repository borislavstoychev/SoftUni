function solve(string1, char, string2) {
    if (string1.replace("_", char) === string2){
        console.log("Matched")
    } else {
        console.log("Not Matched")
    }
}

solve('Str_ng', 'I', 'Strong')
solve('Str_ng', 'i', 'String')