function calculator() {
    let num1;
    let num2;
    let result;
    return {
            init: (selectorNum1, selectorNum2, selectorResult) =>{
                num1 = document.querySelector(selectorNum1);
                num2 = document.querySelector(selectorNum2);
                result = document.querySelector(selectorResult);
            },
            add: () => {
                result.value = Number(num1.value) + Number(num2.value);
                num1.value = '';
                num2.value = '';
            },
            subtract: () => {
                result.value = Number(num1.value) - Number(num2.value);
                num1.value = '';
                num2.value = '';
            },
        }   
}
let calculate = calculator()
calculate.init("#num1","#num2",'#result')




