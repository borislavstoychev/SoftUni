function amazingNumber(num) {
    // num = num.toString();
    let sum = 0;
    for (const e of num.toString()) {
        sum += Number(e);
    }
    let result = sum.toString().includes("9");
    console.log(result ? `${num} Amazing? True`: `${num} Amazing? False`) ;
}
amazingNumber(1233)
amazingNumber(999)