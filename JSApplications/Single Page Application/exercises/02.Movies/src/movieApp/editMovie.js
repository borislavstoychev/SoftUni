import { showDetails } from './details.js';


async function getMovieById(id) {
    const response = await fetch('http://localhost:3030/data/movies/' + id);
    const recipe = await response.json();

    return recipe;
}

let main;
let section;
let movieId;

export function setupEdit(targetMain, targetSection) {
    main = targetMain;
    section = targetSection;
    const form = section.querySelector('form');

    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        edit(formData);
    }));

    async function edit(data) {
        const body = JSON.stringify({
            title: data.get('title'),
            description: data.get('description'),
            img: data.get('imageUrl'),
        });

        const token = sessionStorage.getItem('auth_token');
        if (token == null) {
            return alert('You\'re not logged in!');
        }

        fetch('http://localhost:3030/data/movies/' + movieId, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': token
                },
                body
        })
        .then(response => {
            if (response.status == 200) {
                showDetails(movieId)
                
            }else{
                const error = response.json();
                throw new Error(error.message);
            }
        })
        .catch(error => alert(error.message))
            
        
    }
}


export async function showEdit(id) {
    main.textContent = '';
    main.appendChild(section);

    movieId = id;
    const movie = await getMovieById(movieId);

    section.querySelector('[name="title"]').value = movie.title;
    section.querySelector('[name="description"]').value = movie.description;
    section.querySelector('[name="imageUrl"]').value = movie.img;
}