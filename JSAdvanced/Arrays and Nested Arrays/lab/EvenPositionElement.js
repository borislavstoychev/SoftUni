function evenPositions(arr){
    console.log(arr
        .filter((a, i) => {
            if (i%2 == 0)
                return a
        })
        .join(" "))
}


evenPositions(['20', '30', '40', '50', '60'])
evenPositions(['5', '10'])