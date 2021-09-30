function names(arr){
    arr.sort((a,b) => a.localeCompare(b)).forEach((element, i) => {
        console.log(`${i+1}.${element}`)
    });
}


names(["John", "Bob", "Christina", "Ema"])