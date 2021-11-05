function search() {
   let towns = document.getElementById('towns').children
   let tex = document.getElementById('searchText').value
   let matches = 0
   for (let el of Array.from(towns)){
      if (el.innerHTML.includes(tex)){
         el.style.fontWeight = 'bold'
         el.style.textDecoration = 'underline'
         matches++
      }else {
         el.style.fontWeight = 'normal'
         el.style.textDecoration = ''
      }
   }
   document.getElementById('result').textContent = `${matches} matches found`
}
