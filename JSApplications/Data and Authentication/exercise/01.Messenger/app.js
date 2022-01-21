function attachEvents() {
    const textArea = document.getElementById('messages');
    const inputAuthor = document.querySelector('input[name=author]');
    const inputMessage = document.querySelector('input[name=content]');
    const buttonSubmit = document.getElementById('submit');
    const refreshButton = document.getElementById('refresh');


    buttonSubmit.addEventListener('click', sendMessage);

    refreshButton.addEventListener('click', async () => {
        let response = await fetch('http://localhost:3030/jsonstore/messenger');
        let data = await response.json();
        Object.values(data).forEach(({author, content}) =>{
            textArea.textContent += `${author}: ${content}\n`
        })
    });

    async function sendMessage(){
        const body = JSON.stringify({
            author: inputAuthor.value,
            content: inputMessage.value,
        });
        let response = await fetch('http://localhost:3030/jsonstore/messenger',{
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body
        });
        let data = await response.json();
        textArea.value += `${data.author}: ${data.content}\n`
        inputMessage.value = '';

    }

}

attachEvents();