import { showCatalog } from './catalog.js';


let main;
let section;
let setActiveNav;

export function setupRegister(targetMain, targetSection, onActiveNav) {
    main = targetMain;
    section = targetSection;
    setActiveNav = onActiveNav;

    const form = section.querySelector('form')
    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        ev.currentTarget.reset();
        register(formData);
    }));

    function register(data) {
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
            sessionStorage.setItem('userId', data._id);
            document.getElementById('user').style.display = 'inline-block';
            document.getElementById('guest').style.display = 'none';
            showCatalog()            
        })
        .catch (err => {
            alert(err.message);
        })
    }
}


export function showRegister() {
    setActiveNav('registerLink');
    main.textContent = '';
    main.appendChild(section);
}