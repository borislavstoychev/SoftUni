function create(words) {
   let content = document.getElementById('content');
   words.forEach(element => {
      let div = document.createElement('div')
      let newParagraf = document.createElement('p')
      newParagraf.textContent = element
      newParagraf.style = "display:none"
      div.appendChild(newParagraf)
      content.appendChild(div)
      div.addEventListener('click', showParagraf)
   });

   function showParagraf(e){
      let innerP = e.target.children[0]
      console.log(e.target.children)
      innerP.style = 'display:block'
   }
   console.log('content');
}