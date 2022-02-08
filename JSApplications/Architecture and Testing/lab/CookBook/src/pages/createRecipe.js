import { createRecipe } from '../services/recipeServices.js';

let main;
let section;
let setActiveNav;

export function setupCreate(targetMain, targetSection, onActiveNav) {
    main = targetMain;
    section = targetSection;
    setActiveNav = onActiveNav;
    const form = section.querySelector('form');

    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const data = new FormData(ev.target);
        form.reset();
        createRecipe(data);
    }));
}

export function showCreate() {
    setActiveNav('createLink');
    main.textContent = '';
    main.appendChild(section);
}