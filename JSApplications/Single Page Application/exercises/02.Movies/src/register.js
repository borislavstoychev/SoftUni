import { showHome } from './home.js';


let main;
let section;
const nav = document.querySelector('nav');
const a = nav.querySelector('a.nav-link');

export function setupRegister(targetMain, targetSection, ) {
    main = targetMain;
    section = targetSection;

    const form = section.querySelector('form')
    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        ev.currentTarget.reset();
        register(formData);
    }));

    function register(data) {
        if (data.get('password') != data.get('repeatPassword')) {
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
        .catch (err => {
            alert(err.message);
        })
    }
}


export function showRegister() {
    main.textContent = '';
    main.appendChild(section);
}