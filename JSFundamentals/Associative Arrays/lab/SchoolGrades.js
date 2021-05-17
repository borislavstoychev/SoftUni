function schoolGrades(arr) {
    let grades = new Map();
    arr.forEach(element => {
       let el = element.split(" ")
       let [name, gr] = [el[0], el.splice(1)];
       gr = gr.map(Number);
        if (!grades.has(name)){
            grades.set(name, []);
        }
        grades.set(name, grades.get(name).concat(gr));
    });
    sorted = Array
    .from(grades)
    .sort((a,b) => aveargge(a, b));

    function aveargge(a, b) {
        let aSum = 0;
        for (let i = 0; i < a[1].length; i++) {
            aSum += a[1][i];
        }

        let bSum = 0;
        for (let i = 0; i < b[1].length; i++) {
            bSum += b[1][i];
        }
        return aSum/a[1].length - bSum/b[1].length;
    }
    sorted.forEach(element => {
        console.log(`${element[0]}: ${element[1].join(", ")}`);
    });

}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])