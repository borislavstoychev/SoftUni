function attachEvents() {
    const inputPerson = document.getElementById('person');
    const inputPhone = document.getElementById('phone');
    const btnCreate = document.getElementById('btnCreate');
    const ul = document.getElementById('phonebook');
    const loadButton = document.getElementById('btnLoad');

    btnCreate.addEventListener('click', createContact);
    loadButton .addEventListener('click', loadInfo);

    async function loadInfo(){
        ul.textContent = '';
        try {
            let response = await fetch('http://localhost:3030/jsonstore/phonebook');
            let data = await response.json();
            Object.values(data).forEach(({person, phone, _id})=>{
                let li = document.createElement('li');
                li.setAttribute('id', _id);
                li.textContent = `${person}: ${phone}`;
                let deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';

                deleteButton.addEventListener('click',()=>{
                    fetch(`http://localhost:3030/jsonstore/phonebook/${_id}`, {
                        method: 'DELETE',
                    })
                    .then(response => response.json())
                    .catch(error => alert(error.message))

                    ul.removeChild(li)
                });

                li .appendChild(deleteButton)
                ul.appendChild(li)
            })
        }catch (error){
            alert(error)
        }

    }

    async function createContact(){
        const body = JSON.stringify({
            person: inputPerson.value,
            phone: inputPhone.value,

        })
        let response = await fetch(`http://localhost:3030/jsonstore/phonebook`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body
        });
        inputPerson.value = '';
        inputPhone.value = '';
        loadInfo()
    }
}

attachEvents();