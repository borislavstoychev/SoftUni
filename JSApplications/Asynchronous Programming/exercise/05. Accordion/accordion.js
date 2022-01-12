window.onload = solution;
function solution() {
    const section = document.getElementById('main');
    const url = `http://localhost:3030/jsonstore/advanced/articles/details/`;
    fetch('http://localhost:3030/jsonstore/advanced/articles/list')
    .then(response => response.json())
    .then(data =>{
        data.forEach(element => {
            const accordionDiv = document.createElement('div');
            accordionDiv.classList.add('accordion');
            const headDiv = document.createElement('div');
            headDiv.classList.add('head')

            const titleSpan = document.createElement('span');
            titleSpan.textContent = element.title;

            const button = document.createElement('button');
            button.classList.add('button');
            button.id = element._id;
            button.setAttribute('data-extra', 'no-data');
            button.textContent = 'MORE';

            headDiv.appendChild(titleSpan);
            headDiv.appendChild(button);

            button.addEventListener('click', ()=> {
                if (button.getAttribute('data-extra') == "no-data" ){
                    fetch(url + element._id)
                    .then(response => response.json())
                    .then(data => {
                        const extraDiv = document.createElement('div');
                        extraDiv.classList.add('extra');

                        const p = document.createElement('p');
                        p.textContent = data.content

                        extraDiv.appendChild(p);
                        extraDiv.style.display = "block";
                        accordionDiv.appendChild(extraDiv);
                        button.textContent = "LESS";
                        button.setAttribute('data-extra', true)
                    })
                }else{
                    let div = accordionDiv.getElementsByClassName('extra')[0]  
                    button.textContent === "MORE" ? div.style.display = "block": div.style.display = "none";
                    button.textContent === "MORE" ? button.textContent = "LESS" : button.textContent = "MORE";
                }
                
            })
            accordionDiv.appendChild(headDiv);
            section.appendChild(accordionDiv);
        });
        
    })
}