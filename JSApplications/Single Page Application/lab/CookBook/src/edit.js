import { showDetails } from './details.js';


async function getRecipeById(id) {
    const response = await fetch('http://localhost:3030/data/recipes/' + id);
    const recipe = await response.json();

    return recipe;
}

let main;
let section;
let setActiveNav;
let recipeId;

export function setupEdit(targetMain, targetSection, onActiveNav) {
    main = targetMain;
    section = targetSection;
    setActiveNav = onActiveNav;
    const form = section.querySelector('form');

    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        edit(formData);
    }));

    async function edit(data) {
        const body = JSON.stringify({
            name: data.get('name'),
            img: data.get('img'),
            ingredients: data.get('ingredients').split('\n'),
            steps: data.get('steps').split('\n'),
        });

        const token = sessionStorage.getItem('auth_token');
        if (token == null) {
            return alert('You\'re not logged in!');
        }

        fetch('http://localhost:3030/data/recipes/' + recipeId, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': token
                },
                body
        })
        .then(response => {
            if (response.status == 200) {
                showDetails(recipeId)
                
            }else{
                const error = response.json();
                throw new Error(error.message);
            }
        })
        .catch(error => alert(error.message))
            
        
    }
}


export async function showEdit(id) {
    setActiveNav();
    main.innerHTML = '';
    main.appendChild(section);

    recipeId = id;
    const recipe = await getRecipeById(recipeId);

    section.querySelector('[name="name"]').value = recipe.name;
    section.querySelector('[name="img"]').value = recipe.img;
    section.querySelector('[name="ingredients"]').value = recipe.ingredients.join('\n');
    section.querySelector('[name="steps"]').value = recipe.steps.join('\n');
}