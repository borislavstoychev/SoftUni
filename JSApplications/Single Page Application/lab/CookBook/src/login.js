import { showCatalog } from './catalog.js';

let main;
let section;
let setActiveNav;

export function setupLogin(targetMain, targetSection, onActiveNav){
    main = targetMain;
    section = targetSection;
    setActiveNav = onActiveNav;

    const form = section.querySelector('form');
    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        form.reset();
        login(formData);
    }));

    function login(data) {
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
            sessionStorage.setItem('userId', data._id);
            document.getElementById('user').style.display = 'inline-block';
            document.getElementById('guest').style.display = 'none';
            showCatalog()            
        })
        .catch(er => {
            alert(er.message)
        })
        
    }
}

export function showLogin() {
    setActiveNav('loginLink');
    main.textContent = '';
    main.appendChild(section);
}