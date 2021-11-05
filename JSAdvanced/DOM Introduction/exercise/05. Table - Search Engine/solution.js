function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementById('searchField').value
      let inputText = input.toLowerCase()

      let tableElements = Array.from(document.querySelectorAll('table tr')).slice(2)

      tableElements.forEach(el => {
            let tex = el.textContent.toLowerCase()
            if (tex.includes(inputText)) {
               el.classList.add('select')
            }else {
               el.classList.remove('select')
            }
      })
   }
}