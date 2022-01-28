import { showDetails } from './details.js';

let main;
let section;

export function setupCreate(targetMain, targetSection, ) {
    main = targetMain;
    section = targetSection;
    const form = section.querySelector('form');

    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const data = new FormData(ev.target);
        form.reset();
        createRecipe(data);
    }));

    function createRecipe(data) {
        const ownerId = sessionStorage.getItem('userId');
        const body = JSON.stringify({
            title: data.get('title'),
            description: data.get('description'),
            img: data.get('imageUrl'),
            _ownerId: ownerId,
        });

        const token = sessionStorage.getItem('auth_token');
        if (token == null) {
            return alert('You\'re not logged in!');
        }

        fetch('http://localhost:3030/data/movies', {
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
    main.textContent = '';
    main.appendChild(section);
}