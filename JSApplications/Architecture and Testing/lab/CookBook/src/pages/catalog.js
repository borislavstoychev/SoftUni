import { get } from '../services/requester.js';
import { createRecipePreview } from '../services/recipeServices.js';

let main;
let section;
let setActiveNav;

export function setupCatalog(targetMain, targetSection, onActiveNav) {
    main = targetMain;
    section = targetSection;
    setActiveNav = onActiveNav;
}

export async function showCatalog() {
    setActiveNav('loginLink');
    section.textContent = 'Loading&hellip;';
    main.textContent = '';
    main.appendChild(section);

    const responce = await get('http://localhost:3030/data/recipes?select=' + encodeURIComponent('_id,name,img'));
    const recipes = await responce.json();
    const cards = recipes.map(createRecipePreview);

    const fragment = document.createDocumentFragment();
    cards.forEach(c => fragment.appendChild(c));
    section.textContent = '';
    section.appendChild(fragment);
}