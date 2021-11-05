function subtract() {
    let firstNumber = document.getElementById('firstNumber').value;
    let seconNumber = document.getElementById('secondNumber').value;

    document.getElementById('result').textContent = Number(firstNumber) - Number(seconNumber)
}