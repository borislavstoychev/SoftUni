import { e } from './dom.js';
// import {showEdit} from "./edit.js"


let main;
let section;

export function setupDetails(targetMain, targetSection) {
    main = targetMain;
    section = targetSection;
}

export async function showDetails(id) {
    const divMovie = section.querySelector('div.container')
    divMovie.textContent = 'Loading...';
    main.textContent = '';
    main.appendChild(section);

    const movie = await getMOvieById(id);
    divMovie.textContent = '';
    divMovie.appendChild(createMovieCard(movie));
}


async function getMOvieById(id) {
    const response = await fetch(`http://localhost:3030/data/movies/${id}`);
    const movie = await response.json();

    return movie;
}
function createMovieCard(movie) {
    const result = e('div', { className: 'row bg-light text-dark'},
        e('h1', {}, `Movie title: ${movie.title}`),
        e('div', { className: 'col-md-8' },
            e('img', { className: 'img-thumbnail', src: movie.img , alt: "Movie"}),
        ),
        e('div', { className: 'col-md-4 text-center' },
            e('h3', {className: 'my-3'}, 'Movie Description'),
            e('p', {}, movie.description),
            e('a', {className: 'btn btn-danger', href: '#' }, "Delete"),
            e('a', {className: 'btn btn-warning', href: '#' }, "Edit"),
            e('a', {className: 'btn btn-primary', href: '#' }, "Like"),
            e('span', {className:"enrolled-span", href: '#' }, "Liked 1")
        ),
    );

    const userId = sessionStorage.getItem('userId');
    // if (userId != null && movie._ownerId == userId) {
    //     result.appendChild(e('div', { className: 'controls' },
    //         e('button', { onClick: () => showEdit(movie._id) }, '\u270E Edit'),
    //         e('button', { onClick: onDelete }, '\u2716 Delete'),
    //     ));
    // }

    return result;

    function onDelete() {
        const confirmed = confirm(`Are you sure you want to delete ${movie.name}?`);
        if (confirmed) {
            deleteRecipeById(movie._id);
        }
    }
}

async function deleteRecipeById(id) {
    const token = sessionStorage.getItem('auth_token');

    try {
        const response = await fetch('http://localhost:3030/data/recipes/' + id, {
            method: 'delete',
            headers: {
                'X-Authorization': token
            }
        });

        if (response.status != 200) {
            const error = await response.json();
            throw new Error(error.message);
        }

        section.textContent = '';
        section.appendChild(e('article', {}, e('h2', {}, 'Recipe deleted')));
    } catch (err) {
        alert(err.message);
    }
}

