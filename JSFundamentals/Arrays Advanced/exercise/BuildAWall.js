function foo(arr) {
    let days = [];
    let index = arr.sort((a,b) => a-b)[0]

    for (let i = index; i < 30; i++) {
        let count = 0;
        arr.forEach((element,ind) => {
            if (element < 30) {
                arr[ind] += 1;
                count += 195;
            }
        });
        days.push(count);
    }
    console.log(`${days.join(', ')}
${days.reduce((a, v) => a + v) * 1900} pesos`);
}


foo([21, 25, 28])