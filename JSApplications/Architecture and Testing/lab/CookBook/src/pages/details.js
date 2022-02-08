import { createRecipeCard } from '../services/recipeServices.js';
import { get } from '../services/requester.js';


let main;
let section;
let setActiveNav;
let url = 'http://localhost:3030/data/recipes/'

export function setupDetails(targetMain, targetSection, onActiveNav) {
    main = targetMain;
    section = targetSection;
    setActiveNav = onActiveNav;
}

export async function showDetails(id) {
    setActiveNav();
    section.innerHTML = 'Loading&hellip;';
    main.textContent = '';
    main.appendChild(section);

    const response = await get(url + id);
    const recipe = await response.json();
    section.textContent = '';
    section.appendChild(createRecipeCard(recipe));
}

