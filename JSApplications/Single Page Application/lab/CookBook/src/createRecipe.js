import { showDetails } from './details.js';

let main;
let section;
let setActiveNav;

export function setupCreate(targetMain, targetSection, onActiveNav) {
    main = targetMain;
    section = targetSection;
    setActiveNav = onActiveNav;
    const form = section.querySelector('form');

    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const data = new FormData(ev.target);
        form.reset();
        createRecipe(data);
    }));

    function createRecipe(data) {
        const body = JSON.stringify({
            name: data.get('name'),
            img: data.get('img'),
            ingredients: data.get('ingredients').split('\n'),
            steps: data.get('steps').split('\n'),
        });

        const token = sessionStorage.getItem('auth_token');
        if (token == null) {
            return alert('You\'re not logged in!');
        }

        fetch('http://localhost:3030/data/recipes', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': token
                },
                body
        })
        .then(response => {
            if (response.status !== 200) {
                const error = response.json();
                throw new Error(error.message);
            }
            return response.json()
        })
        .then(info =>{

            showDetails(info._id)
        })
        .catch(error => alert(error.message))
            
        
    }
}

export function showCreate() {
    setActiveNav('createLink');
    main.textContent = '';
    main.appendChild(section);
}