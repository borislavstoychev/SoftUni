import { showMovies } from './movies.js';
import { showCreate } from './addMovies.js';

let main;
let section;
let sectionBtn;

export function setupAddButton(targetSection) {
    sectionBtn = targetSection;
}

export function setupHome(targetMain, targetSection){
    main = targetMain;
    section = targetSection;
}

export async function showHome() {
    main.textContent = '';
    main.appendChild(section);
    if (sessionStorage.getItem('auth_token') != null) {
        sectionBtn.addEventListener('click', (ev) =>{
            ev.preventDefault();
            showCreate()
        })
        main.appendChild(sectionBtn)
    }
    main.appendChild(await showMovies())
}