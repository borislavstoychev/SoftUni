const form = document.querySelector('form');

form.addEventListener('submit', (ev => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    ev.currentTarget.reset();
    onSubmit(formData);
}));

function onSubmit(data) {
    if (data.get('password') != data.get('rePass')) {
        return alert('Passwords don\'t match');
    }

    const body = JSON.stringify({
        email: data.get('email'),
        password: data.get('password'),
    });

    fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body
        })
    .then(response =>{
        if (response.status !== 200) {
            throw new Error('Username already exist');
           
        }
        return response.json()
    })
    .then(data => {
        sessionStorage.setItem('authToken', data.accessToken);
        window.location = 'index.html'
    })
    .catch (err => {
        alert(err.message);
    })
}