function sumTable() {
    let row = document.querySelectorAll('table tr');
    let sum = 0;
    for (let i = 1; i < row.length; i++) {
        sum += Number(row[i].lastElementChild.textContent);
    }
    document.getElementById('sum').textContent = sum
}
