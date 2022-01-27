import { setupCreate, showCreate } from "./addMovies.js";

let section;

export function setupAddButton(targetSection) {
    section = targetSection;
}

export function showAddButoon() {
    if (sessionStorage.getItem('auth_token') != null) {
        section.addEventListener('click', (ev) =>{
            ev.preventDefault();
            showCreate()
        })
        return section;
    }
    section.textContent = "";
    return section
    
}