const form = document.querySelector('form');
form.addEventListener('submit', (ev => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    ev.currentTarget.reset();
    onSubmit(formData);
}));

function onSubmit(data) {
    const body = JSON.stringify({
        name: data.get('name'),
        img: data.get('img'),
        ingredients: data.get('ingredients').split('\n'),
        steps: data.get('steps').split('\n'),
    });
    const token = sessionStorage.getItem('auth_token');
    fetch('http://localhost:3030/data/recipes', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token 
            },
            body
        })
    .then(response =>{
        if (!response.ok) {
            throw new Error('You are not login!');
           
        }
        return response.json()
    })
    .then(() => {
        window.location = "index.html"
    })
    .catch (err => {
        alert(err.message);
    })
}