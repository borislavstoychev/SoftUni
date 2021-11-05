function solve() {
  let text =document.getElementById('input').value.split(".").slice(0,-1)
  let result = ''
  let current = ''

  for (let i=0; i<text.length; i++){
    if (i % 3==0 & i !== 0){
      result += '<p>' + current + '</p>'
      current = ''
    }
    current += text[i] + '.'
  }
  if (current !== ""){
    result += '<p>' + current + "</p>"
  }
  document.getElementById('output').innerHTML = result
}