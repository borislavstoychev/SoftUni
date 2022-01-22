const form = document.querySelector('form');
const logout = document.getElementById('logout');

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
        console.log(data)
        sessionStorage.setItem('auth_token', data.accessToken);
        sessionStorage.setItem('user', data.email);
        sessionStorage.setItem('userId', data._id);
        window.location = 'index.html';
    })
    .catch (err => {
        alert(err.message);
    })
}