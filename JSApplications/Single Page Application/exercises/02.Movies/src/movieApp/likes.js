import { showDetails } from "./details.js";

export async function likeMovie(e){
    const movieId = e.target.id;
    let url = `http://localhost:3030/data/likes/`
    const body = JSON.stringify({
        movieId: movieId,
    });
    const token = sessionStorage.getItem('auth_token');
    fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body
    })
    .then(response => {
        if (!response.ok){
            throw new Error("Can not like the movie!");
        }
        return response.json()
    })
    .then(data => {
        showDetails(movieId)          
    })
    .catch(er => {
        alert(er.message)
    })

}