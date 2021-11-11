const button = document.getElementsByTagName('button');
let [button1, button2] = button
button1.addEventListener('click', clickMe);
button2.addEventListener('click', clickMe1);
let result = document.getElementById('newItemText')

function clickMe(e) {
      let final = Number(result.textContent) + 1
    if (final >= 0){
          result.textContent = final
    }
    if (button2.disabled){
        button2.disabled = false
    }
}

function clickMe1(e) {
    let final = Number(result.textContent) - 1
    if (final >= 0){
          result.textContent = final
    }else
    button2.setAttribute('disabled', '')
    }