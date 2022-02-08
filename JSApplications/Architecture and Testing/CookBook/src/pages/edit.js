import { edit } from '../services/recipeServices.js';
import { get } from '../services/requester.js';


let main;
let section;
let setActiveNav;
let recipeId;
let url = 'http://localhost:3030/data/recipes/';

export function setupEdit(targetMain, targetSection, onActiveNav) {
    main = targetMain;
    section = targetSection;
    setActiveNav = onActiveNav;
    const form = section.querySelector('form');

    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        edit(formData, recipeId);
    }));
}


export async function showEdit(id) {
    setActiveNav();
    main.innerHTML = '';
    main.appendChild(section);

    recipeId = id;
    const response = await get(url + id);
    const recipe = await response.json()

    section.querySelector('[name="name"]').value = recipe.name;
    section.querySelector('[name="img"]').value = recipe.img;
    section.querySelector('[name="ingredients"]').value = recipe.ingredients.join('\n');
    section.querySelector('[name="steps"]').value = recipe.steps.join('\n');
}