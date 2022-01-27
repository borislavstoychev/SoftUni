import { showMovies } from './movies.js';
import {showAddButoon} from "./addButton.js"

let main;
let section;

export function setupHome(targetMain, targetSection){
    main = targetMain;
    section = targetSection;
}

export async function showHome() {
    main.textContent = '';
    main.appendChild(section);
    main.appendChild(showAddButoon());
    main.appendChild(await showMovies())
}