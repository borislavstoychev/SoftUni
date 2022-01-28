import { showHome } from '../movieApp/home.js';


let main;
let section;

const nav = document.querySelector('nav');
const a = nav.querySelector('a.nav-link');
export function setupLogin(targetMain, targetSection){
    main = targetMain;
    section = targetSection;

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
            sessionStorage.setItem('email', data.email);
            [...document.getElementsByClassName('user')].forEach(el=>{
                el.style.display = 'inline-block';
            });
            [...document.getElementsByClassName('guest')].forEach(el=>{
                el.style.display = 'none';
            });
            a.textContent = `Welcome, ${sessionStorage.getItem('email')}`

            showHome()          
        })
        .catch(er => {
            alert(er.message)
        })
        
    }
}

export function showLogin() {
    main.textContent = '';
    main.appendChild(section);
}