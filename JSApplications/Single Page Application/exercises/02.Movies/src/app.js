import {setupLogin, showLogin} from './auth/login.js'
import { setupMovie } from './movieApp/movies.js';
import { setupHome, showHome } from './movieApp/home.js';
import { setupRegister, showRegister } from './auth/register.js';
import { setupDetails } from './movieApp/details.js';
import { setupEdit } from './movieApp/editMovie.js';
import {setUserNav, setupNavigation} from './helpers/navigation.js'
import { setupAddButton } from './movieApp/home.js';
import { setupCreate } from './movieApp/addMovies.js';
import {logout} from './auth/logout.js'

window.addEventListener('load', async () => {
    setUserNav();

    const main = document.querySelector('main');

    setupHome(main, document.getElementById('home-page'));
    setupAddButton(document.getElementById('add-movie-button'));
    setupMovie(document.getElementById('movie'));
    setupCreate(main, document.getElementById('add-movie'));
    setupLogin(main, document.getElementById('form-login'));
    setupRegister(main, document.getElementById('form-sign-up'));
    setupDetails(main, document.getElementById('movie-example'));
    setupEdit(main, document.getElementById('edit-movie'));

    
    const links = {
        'home': showHome,
        'loginLink': showLogin,
        'registerLink': showRegister,
        'logoutBtn': logout,
    };
    setupNavigation(links);
    
    // Start application in catalog view
    showHome();

})