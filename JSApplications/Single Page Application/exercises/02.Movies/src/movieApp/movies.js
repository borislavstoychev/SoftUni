import { e } from '../helpers/dom.js';
import { showDetails } from './details.js';

async function getMovie() {
    const response = await fetch('http://localhost:3030/data/movies');
    const movies = await response.json();

    return movies;
}


function createMoviePreview(movie) {
    const result = e('div', { className: 'card mb-4' },
        e('img', { className: 'card-img-top', src: movie.img, width: 400 }),
        e('div', { className: 'card-body' }, e('h4', { className: "card-title" }, movie.title)),
        e('div', { className: 'card-footer' }, e('a', {},e('button', {className: "btn btn-info", type: "button", onClick: () => showDetails(movie._id)}, "Details")),),
    );

    return result;
}

let section;

export function setupMovie(targetSection) {
    section = targetSection;
}

export async function showMovies() {
    const divMovies = section.querySelector('div.card-deck.d-flex.justify-content-center');
    divMovies.textContent = 'Loading...';
   

    const movies = await getMovie();
    const cards = movies.map(createMoviePreview);

    const fragment = document.createDocumentFragment();
    cards.forEach(c => fragment.appendChild(c));
    divMovies.textContent = '';
    divMovies.appendChild(fragment);
    return await section
}