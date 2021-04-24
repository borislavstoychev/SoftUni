function mergeArrays (array1, array2) {
    const newArray = [];
    for (let i = 0; i < array1.length; i++) {
        i % 2 == 0 ? newArray.push(Number(array1[i]) + Number(array2[i])) : newArray.push(array1[i] + array2[i])
    }
    console.log(newArray.join(" - "))
}

mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44'])