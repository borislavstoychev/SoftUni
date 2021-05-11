function searchingNum(arr1, arr2) {
    let result = arr1.splice(0, arr2[0]);
    result.splice(0, arr2[1]);
    result = result.filter(a => a===arr2[2])
    return `Number ${arr2[2]} occurs ${result.length} times.`
}

console.log(searchingNum([5, 2, 3, 4, 1, 3],
    [5, 2, 3]))