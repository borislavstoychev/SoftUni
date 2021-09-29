function bestDivisor(num1, num2){
    let maxDivisior = 0
    let divisior = Math.min(num2, num1)
    while (divisior){
        if (num1 % divisior==0 && num2%divisior==0){
            console.log(divisior);
            break;
        } else{
            divisior -= 1;
        };
    }

}

bestDivisor(2154, 158)