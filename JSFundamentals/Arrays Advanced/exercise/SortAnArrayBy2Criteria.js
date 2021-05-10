function sortByTowCriteria(arr) {
    return arr
    .sort((a,b) => a.length - b.length !== 0 ? a.length - b.length : a.localeCompare(b))
    .join("\n");
}

console.log(sortByTowCriteria(["alpha", "beta", "gamma"]));
console.log(sortByTowCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]));