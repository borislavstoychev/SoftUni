function solve() {
    let lectureName = document.querySelector('input[name="lecture-name"]');
    let dateInput = document.querySelector("input[name='lecture-date']");
    let moduleInput = document.querySelector('select[name="lecture-module"]');
    let button = document.querySelector('form button');
    let trainingSection = document.querySelector('div[class="modules"]');
    
    button.addEventListener('click', (e) =>{
        e.preventDefault();
        if (!lectureName.value || !dateInput.value || moduleInput.value === "Select module") {
            return;
          };
        let [lecture, date, module] = [lectureName.value, dateInput.value, moduleInput.value];
        date = date.replace(/-/g, '/');
        date = date.replace('T', ' - ');

        //set value to empty string
        lectureName.value = '';
        dateInput.value = '';
        moduleInput.value = '';
        //search all H3 in div module
        let allElements = Array.from(document.querySelectorAll('.modules .module'));
        //searching text
        let moduleH = module.toUpperCase() + "-MODULE";
        let moduleDiv = allElements.filter(el => el.firstChild.textContent === moduleH)[0]
        //set module dive and h3 if not exist
        if (!moduleDiv){
            moduleDiv = document.createElement('div');
            moduleDiv.classList.add('module');
            let moduleH3 = document.createElement('h3');
            moduleH3.textContent = moduleH
            let moduleUl = document.createElement('ul');

            moduleDiv.appendChild(moduleH3);
            moduleDiv.appendChild(moduleUl);
            trainingSection.appendChild(moduleDiv);
        }
        //append li to module ul
        let moduleLi = creaetLecture(lecture, date)
        moduleDiv.lastChild.appendChild(moduleLi);
        //sort all lectures
        Array.from(moduleDiv.lastChild.childNodes)
        .sort((a,b) => a.firstChild.textContent.split(" - ")[1].localeCompare(b.firstChild.textContent.split(" - ")[1]))
        .forEach(el=>{
            moduleDiv.lastChild.appendChild(el);
        });
            
        moduleLi.lastChild.addEventListener('click', ()=> {
            moduleLi.remove();
            if (!moduleDiv.lastChild.childNodes.length){
                moduleDiv.remove();
            }
        });
        // // Delete lectures VERY GOOD APPROACH!
        // document.addEventListener('click', (e) => {

        //     let delButton = e.target;
        //     let li = delButton.parentNode;
        //     let ul = li.parentNode;
  
        //     if (delButton.tagName !== 'BUTTON') {
        //         return; 
        //     }
        //     if (delButton.textContent === 'Del') {
        //         li.remove();
  
        //         // Delete the whole module if empty
        //         if (ul.children.length === 0) {
        //             ul.parentNode.remove();
        //         }
        //     }
        // });  
    });

    function creaetLecture(lecture, date){
        //create li, h4 and button
        let moduleLi = document.createElement('li');
        moduleLi.classList.add('flex');
        let moduleH4 = document.createElement('h4');
        moduleH4.textContent = `${lecture} - ${date}`;
        let moduleButton = document.createElement('button');
        moduleButton.textContent = 'Del';
        moduleButton.classList.add('red');
        //append h4 and button Del to li
        moduleLi.appendChild(moduleH4);
        moduleLi.appendChild(moduleButton);
        return moduleLi;

    }
};