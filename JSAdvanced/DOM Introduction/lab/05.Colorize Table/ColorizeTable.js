function colorize() {
    let row = document.querySelectorAll('table tr:nth-child(even)');

    for (let i = 0; i < row.length; i++) {
        row[i].style.backgroundColor = 'teal';
    }

}