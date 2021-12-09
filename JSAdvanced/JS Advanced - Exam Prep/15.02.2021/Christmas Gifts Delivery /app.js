function solution() {
    let sections = Array.from(document.getElementsByClassName('card'));
    // input section
    let divAdd = sections[0].children[1];
    let buttonAdd = divAdd.querySelector('button');
    let inputAdd = document.querySelector('input')
    
    buttonAdd .addEventListener('click', ()=>{
        createLi(inputAdd.value);
        sortLi();
        inputAdd.value = "";
    });

    //list gift section
    let ulGifts = sections[1].children[1];

    // send gift section
    let ulSend = sections[2].children[1];

    // discard gift section
    let ulDiscard = sections[3].children[1];

    function createLi(content){
        //create li and buttons
        let li = document.createElement('li');
        li.classList.add('gift')
        li.textContent = content
        let buttonSend = document.createElement('button');
        buttonSend.id = 'sendButton';
        buttonSend.textContent = 'Send'
        let buttonDiscard = document.createElement('button');
        buttonDiscard.id = 'discardButton';
        buttonDiscard.textContent = 'Discard'
        //append li to ul
        li.appendChild(buttonSend);
        li.appendChild(buttonDiscard);
        ulGifts.appendChild(li)

        buttonSend.addEventListener('click', () => {
            let liSend = document.createElement('li');
            liSend.textContent = content
            liSend.classList.add('gift')
            ulSend.appendChild(liSend)
            ulGifts.removeChild(li)

        });
        buttonDiscard.addEventListener('click', ()=> {
            let liDiscard = document.createElement('li');
            liDiscard.textContent = content;
            liDiscard.classList.add('gift');
            ulDiscard.appendChild(liDiscard);
            ulGifts.removeChild(li);
        });
        
        
    };

    function sortLi(){
        Array.from(ulGifts.children).sort((a,b) =>
            a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent)
        )
        .forEach(el => {
            ulGifts.appendChild(el)
        });
    };

}