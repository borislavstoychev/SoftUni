const form = document.querySelector('form');

form.addEventListener('submit', (ev => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    onSubmit(formData);
}));

function onSubmit(data) {
    const body = JSON.stringify({
        email: data.get('email'),
        password: data.get('password')
    });
    fetch('http://localhost:3030/users/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body
    })
    .then(response => {
        if (response.status === 403){
            throw new Error('Incorect username or passowrd!');
        }
        return response.json()
    })
    .then(data => {
        sessionStorage.setItem('auth_token', data.accessToken);
        window.location = 'index.html'
    })
    .catch(er => {
        alert(er.message)
    })
    
}