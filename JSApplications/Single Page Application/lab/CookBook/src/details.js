import { e } from './dom.js';
import {showEdit} from "./edit.js"


let main;
let section;
let setActiveNav;

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

    const recipe = await getRecipeById(id);
    section.textContent = '';
    section.appendChild(createRecipeCard(recipe));
}


async function getRecipeById(id) {
    const response = await fetch('http://localhost:3030/data/recipes/' + id);
    const recipe = await response.json();

    return recipe;
}

function createRecipeCard(recipe) {
    const result = e('article', {},
        e('h2', {}, recipe.name),
        e('div', { className: 'band' },
            e('div', { className: 'thumb' }, e('img', { src: recipe.img })),
            e('div', { className: 'ingredients' },
                e('h3', {}, 'Ingredients:'),
                e('ul', {}, recipe.ingredients.map(i => e('li', {}, i))),
            )
        ),
        e('div', { className: 'description' },
            e('h3', {}, 'Preparation:'),
            recipe.steps.map(s => e('p', {}, s))
        ),
    );

    const userId = sessionStorage.getItem('userId');
    if (userId != null && recipe._ownerId == userId) {
        result.appendChild(e('div', { className: 'controls' },
            e('button', { onClick: () => showEdit(recipe._id) }, '\u270E Edit'),
            e('button', { onClick: onDelete }, '\u2716 Delete'),
        ));
    }

    return result;

    function onDelete() {
        const confirmed = confirm(`Are you sure you want to delete ${recipe.name}?`);
        if (confirmed) {
            deleteRecipeById(recipe._id);
        }
    }
}

async function deleteRecipeById(id) {
    const token = sessionStorage.getItem('auth_token');

    try {
        const response = await fetch('http://localhost:3030/data/recipes/' + id, {
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
        section.appendChild(e('article', {}, e('h2', {}, 'Recipe deleted')));
    } catch (err) {
        alert(err.message);
    }
}

