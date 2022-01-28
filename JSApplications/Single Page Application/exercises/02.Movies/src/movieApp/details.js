import { deleteMovie } from './deleteMovie.js';
import { e } from '../helpers/dom.js';
import { showEdit } from './editMovie.js';
import { likeMovie } from './likes.js';


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
    const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`)
    let likes = await response.json();
    const movie = await getMovieById(id);
    divMovie.textContent = '';
    divMovie.appendChild(createMovieCard(movie, likes));
}


async function getMovieById(id) {
    const response = await fetch(`http://localhost:3030/data/movies/${id}`);
    const movie = await response.json();

    return movie;
}
function createMovieCard(movie, likes) {
    const result = e('div', { className: 'row bg-light text-dark'},
        e('h1', {}, `Movie title: ${movie.title}`),
        e('div', { className: 'col-md-8' },
            e('img', { className: 'img-thumbnail', src: movie.img , alt: "Movie"}),
        ),
        e('div', { className: 'col-md-4 text-center' },
            e('h3', {className: 'my-3'}, 'Movie Description'),
            e('p', {}, movie.description),
            e('a', {className: 'btn btn-danger', href: '#', style:"display:none" }, "Delete"),
            e('a', {className: 'btn btn-warning', href: '#', style:"display:none" }, "Edit"),
        ),
    );

    const userId = sessionStorage.getItem('userId');
    const divMovieBtn = result.querySelector('div.col-md-4.text-center');
    let likesSpan = e('span', {className:"enrolled-span", href: '#' }, `Liked ${likes}`);

    if (userId != null && movie._ownerId == userId) {
        divMovieBtn.appendChild(likesSpan);
        const btnDelete = result.querySelector('a.btn.btn-danger');
        btnDelete.removeAttribute("style");
        const btnEdit = result.querySelector('a.btn.btn-warning');
        btnEdit.removeAttribute("style");

        btnDelete.addEventListener('click', ()=>{
            const confirmed = confirm(`Are you sure you want to delete ${movie.title}?`);
            if (confirmed) {
                deleteMovie(movie._id, section);
            }
        });
        
        btnEdit.addEventListener('click', (e)=>{
            e.preventDefault();
            showEdit(movie._id)
        });
    }else{
        fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movie._id}%22%20and%20_ownerId%3D%22${userId}%22`)
        .then(responnse => responnse.json())
        .then(userLikesArr =>{
            if (userLikesArr.length > 0 || !userId){
                divMovieBtn.appendChild(likesSpan);
            }else{
                let likeBtn = e('a', {className: 'btn btn-primary', href: '#', id: movie._id }, "Like");
                divMovieBtn.appendChild(likeBtn)
                likeBtn.addEventListener('click', likeMovie)
            }
        })
        
        
    }

    return result;
}

