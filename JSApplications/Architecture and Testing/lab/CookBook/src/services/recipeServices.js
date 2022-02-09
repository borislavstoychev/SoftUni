import {e} from "../dom.js"
import {showDetails} from "../pages/details.js"
import { showEdit } from "../pages/edit.js";
import { del, post, put } from "./requester.js";


const baseUrl = 'http://localhost:3030/data/recipes';

export function createRecipeCard(recipe) {
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

export function createRecipePreview(recipe) {
  const result = e('article', { className: 'preview', onClick: () => showDetails(recipe._id) },
      e('div', { className: 'title' }, e('h2', {}, recipe.name)),
      e('div', { className: 'small' }, e('img', { src: recipe.img })),
  );

  return result;
}

export function createRecipe(data) {
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
  post(baseUrl, body, token)
  .then(response => {
      if (response.status !== 200) {
          const error = response.json();
          throw new Error(error.message);
      }
      return response.json()
  })
  .then(info =>{

      showDetails(info._id)
  })
  .catch(error => alert(error.message))
}

export async function edit(data, recipeId) {
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
  
  put(`${baseUrl}/${recipeId}`, body, token)
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

async function deleteRecipeById(id) {
  const token = sessionStorage.getItem('auth_token');

  try {
      const response = await del(`${baseUrl}/${id}`, null, token)
      if (response.status != 200) {
          const error = await response.json();
          throw new Error(error.message);
      }
      let section = document.querySelector('section');
      section.textContent = '';
      section.appendChild(e('article', {}, e('h2', {}, 'Recipe deleted')));
  } catch (err) {
      alert(err.message);
  }
}
