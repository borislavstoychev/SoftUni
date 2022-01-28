import { e } from "../helpers/dom.js";

export async function deleteMovie(id, section) {
    const token = sessionStorage.getItem('auth_token');

    try {
        const response = await fetch('http://localhost:3030/data/movies/' + id, {
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
        section.appendChild(e('article', {}, e('h2', {}, 'Movie deleted')));
    } catch (err) {
        alert(err.message);
    }
}