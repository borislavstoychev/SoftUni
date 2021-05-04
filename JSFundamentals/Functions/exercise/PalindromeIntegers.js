function palindrome(arr) {
    for (const num of arr) {
        let palindromNum = Number(num
        .toString()
        .split("")
        .reverse()
        .join(""));
        num === palindromNum
        ? console.log("true") 
        : console.log ("false")
    }
}

palindrome([123,323,421,121])
palindrome([32,2,232,1010])